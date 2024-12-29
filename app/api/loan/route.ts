import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const CreateLoanSchema = z.object({
    memberId: z.string().uuid(),
    collectionIds: z.array(z.string().uuid()).min(1, {
        message: "Minimal harus meminjam 1 koleksi"
    }),
    loanDate: z.coerce.date(),
    returnDueDate: z.coerce.date(),
});

const UpdateLoanSchema = z.object({
    returnDate: z.coerce.date().optional(),
    status: z.enum(["ongoing", "returned", "overdue"]).optional(),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validatedData = CreateLoanSchema.parse(body);

        // Start transaction
        return await prisma.$transaction(async (tx) => {
            // Check member exists
            const member = await tx.member.findFirst({
                where: {
                    id: validatedData.memberId,
                    deletedAt: null
                }
            });

            if (!member) {
                throw new Error("Anggota tidak ditemukan");
            }

            // Check all collections exist and have available copies
            const collections = await tx.collection.findMany({
                where: {
                    id: { in: validatedData.collectionIds },
                    deletedAt: null,
                    availableCopies: { gt: 0 }
                }
            });

            if (collections.length !== validatedData.collectionIds.length) {
                throw new Error("Beberapa koleksi tidak tersedia");
            }

            // Create loan
            const loan = await tx.loan.create({
                data: {
                    memberId: validatedData.memberId,
                    loanDate: validatedData.loanDate,
                    returnDueDate: validatedData.returnDueDate,
                    status: "ongoing",
                    loanItems: {
                        create: validatedData.collectionIds.map(collectionId => ({
                            collectionId
                        }))
                    }
                },
                include: {
                    loanItems: true
                }
            });

            // Update available copies
            await Promise.all(
                collections.map(collection =>
                    tx.collection.update({
                        where: { id: collection.id },
                        data: { availableCopies: collection.availableCopies - 1 }
                    })
                )
            );

            return NextResponse.json({
                success: true,
                data: loan,
                message: "Peminjaman berhasil dibuat"
            }, { status: 201 });
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({
                success: false,
                message: "Data tidak valid",
                errors: error.errors.map(err => ({
                    field: err.path.join("."),
                    message: err.message
                }))
            }, { status: 400 });
        }

        return NextResponse.json({
            success: false,
            message: error instanceof Error ? error.message : "Terjadi kesalahan saat membuat peminjaman"
        }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { message: "ID peminjaman harus disertakan" },
                { status: 400 }
            );
        }

        const body = await request.json();
        const validatedData = UpdateLoanSchema.parse(body);

        // Start transaction
        return await prisma.$transaction(async (tx) => {
            // Get existing loan with items
            const existingLoan = await tx.loan.findFirst({
                where: {
                    id,
                    deletedAt: null
                },
                include: {
                    loanItems: {
                        include: {
                            collection: true
                        }
                    }
                }
            });

            if (!existingLoan) {
                throw new Error("Peminjaman tidak ditemukan");
            }

            // If returning books (status changes to returned)
            if (validatedData.status === "returned" && existingLoan.status !== "returned") {
                // Update available copies
                await Promise.all(
                    existingLoan.loanItems.map(item =>
                        tx.collection.update({
                            where: { id: item.collectionId },
                            data: {
                                availableCopies: item.collection.availableCopies + 1
                            }
                        })
                    )
                );
            }

            // Update loan
            const updatedLoan = await tx.loan.update({
                where: { id },
                data: {
                    ...validatedData,
                    // If return date is set, automatically set status to returned
                    ...(validatedData.returnDate && { status: "returned" })
                },
                include: {
                    loanItems: true
                }
            });

            return NextResponse.json({
                success: true,
                data: updatedLoan,
                message: "Peminjaman berhasil diperbarui"
            });
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({
                success: false,
                message: "Data tidak valid",
                errors: error.errors.map(err => ({
                    field: err.path.join("."),
                    message: err.message
                }))
            }, { status: 400 });
        }

        return NextResponse.json({
            success: false,
            message: error instanceof Error ? error.message : "Terjadi kesalahan saat memperbarui peminjaman"
        }, { status: 500 });
    }
}

// ...existing code...

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { message: "ID peminjaman harus disertakan" },
                { status: 400 }
            );
        }

        return await prisma.$transaction(async (tx) => {
            // Get existing loan with items
            const existingLoan = await tx.loan.findFirst({
                where: {
                    id,
                    deletedAt: null
                },
                include: {
                    loanItems: {
                        include: {
                            collection: true
                        }
                    }
                }
            });

            if (!existingLoan) {
                throw new Error("Peminjaman tidak ditemukan");
            }

            // If loan is ongoing, restore available copies
            if (existingLoan.status === "ongoing") {
                await Promise.all(
                    existingLoan.loanItems.map(item =>
                        tx.collection.update({
                            where: { id: item.collectionId },
                            data: {
                                availableCopies: item.collection.availableCopies + 1
                            }
                        })
                    )
                );
            }

            // Soft delete loan and its items
            const deletedLoan = await tx.loan.update({
                where: { id },
                data: {
                    deletedAt: new Date(),
                    loanItems: {
                        updateMany: {
                            where: { loanId: id },
                            data: { deletedAt: new Date() }
                        }
                    }
                },
                include: {
                    loanItems: true
                }
            });

            return NextResponse.json({
                success: true,
                data: deletedLoan,
                message: "Peminjaman berhasil dihapus"
            });
        });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error instanceof Error ? error.message : "Terjadi kesalahan saat menghapus peminjaman"
        }, { status: 500 });
    }
}

