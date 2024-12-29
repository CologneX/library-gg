import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const ReturnLoanSchema = z.object({
    loanId: z.string({
        required_error: "ID peminjaman harus disertakan",
    })
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { loanId } = ReturnLoanSchema.parse(body);

        return await prisma.$transaction(async (tx) => {
            const loan = await tx.loan.findFirst({
                where: {
                    id: loanId,
                    deletedAt: null,
                },
                include: {
                    loanItems: {
                        include: {
                            collection: true
                        }
                    }
                }
            });

            if (!loan) {
                throw new Error("Peminjaman tidak ditemukan");
            }

            if (loan.status === "returned") {
                throw new Error("Peminjaman sudah dikembalikan");
            }

            // Update collection availability
            await Promise.all(
                loan.loanItems.map(item =>
                    tx.collection.update({
                        where: { id: item.collectionId },
                        data: {
                            availableCopies: item.collection.availableCopies + 1
                        }
                    })
                )
            );

            // Update loan status
            const updatedLoan = await tx.loan.update({
                where: { id: loanId },
                data: {
                    status: "returned",
                    returnDate: new Date()
                }
            });

            return NextResponse.json({
                success: true,
                data: updatedLoan,
                message: "Peminjaman berhasil dikembalikan"
            });
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({
                success: false,
                message: "Data tidak valid",
                errors: error.errors
            }, { status: 400 });
        }

        return NextResponse.json({
            success: false,
            message: error instanceof Error ? error.message : "Terjadi kesalahan sistem"
        }, { status: 500 });
    }
}