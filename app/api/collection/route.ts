import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";


export const CreateCollectionSchema = z.object({
    title: z.string().min(1, {
        message: "Judul koleksi harus diisi"
    }),
    author: z.string().optional().nullable(),
    publisher: z.string().optional().nullable(),
    yearPublished: z.number().int().min(1000, {
        message: "Tahun terbit tidak valid"
    }).max(new Date().getFullYear(), {
        message: "Tahun terbit tidak boleh melebihi tahun sekarang"
    }).optional().nullable(),
    isbn: z.string().regex(/^(?:\d{10}|\d{13})$/, {
        message: "ISBN harus berupa 10 atau 13 digit angka"
    }).optional().nullable(),
    totalCopies: z.number().int().min(1, {
        message: "Jumlah total copy minimal 1"
    }).default(1),
    availableCopies: z.number().int().min(0, {
        message: "Jumlah copy tersedia tidak boleh negatif"
    }).default(1),
});

const UpdateCollectionSchema = z.object({
    title: z.string().min(1, {
        message: "Judul koleksi harus diisi"
    }).optional(),
    author: z.string().optional().nullable(),
    publisher: z.string().optional().nullable(),
    yearPublished: z.number().int().min(1000, {
        message: "Tahun terbit tidak valid"
    }).max(new Date().getFullYear(), {
        message: "Tahun terbit tidak boleh melebihi tahun sekarang"
    }).optional().nullable(),
    isbn: z.string().regex(/^(?:\d{10}|\d{13})$/, {
        message: "ISBN harus berupa 10 atau 13 digit angka"
    }).optional().nullable(),
    totalCopies: z.number().int().min(1, {
        message: "Jumlah total copy minimal 1"
    }).optional(),
    availableCopies: z.number().int().min(0, {
        message: "Jumlah copy tersedia tidak boleh negatif"
    }).optional(),
});
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = CreateCollectionSchema.parse(body);

        // Check availableCopies
        if (validatedData.availableCopies > validatedData.totalCopies) {
            return NextResponse.json(
                { message: "Jumlah copy tersedia tidak boleh melebihi total copy" },
                { status: 400 }
            );
        }

        // Check ISBN duplicate
        if (validatedData.isbn) {
            const existingCollection = await prisma.collection.findUnique({
                where: { isbn: validatedData.isbn }
            });

            if (existingCollection) {
                return NextResponse.json(
                    { message: "ISBN sudah terdaftar dalam sistem" },
                    { status: 409 }
                );
            }
        }

        // Create new collection
        const newCollection = await prisma.collection.create({
            data: validatedData
        });

        return NextResponse.json({
            success: true,
            data: newCollection,
            message: "Koleksi berhasil ditambahkan"
        }, { status: 201 });

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
            message: error instanceof Error ? error.message : "Terjadi kesalahan saat menambahkan koleksi"
        }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { message: "ID koleksi harus disertakan" },
                { status: 400 }
            );
        }

        // Check if collection exists and not already deleted
        const existingCollection = await prisma.collection.findFirst({
            where: {
                id,
                deletedAt: null
            }
        });

        if (!existingCollection) {
            return NextResponse.json(
                { message: "Koleksi tidak ditemukan" },
                { status: 404 }
            );
        }

        // Soft delete
        const deletedCollection = await prisma.collection.update({
            where: { id },
            data: {
                deletedAt: new Date(),
                availableCopies: 0
            }
        });

        return NextResponse.json({
            success: true,
            data: deletedCollection,
            message: "Koleksi berhasil dihapus"
        });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error instanceof Error ? error.message : "Terjadi kesalahan saat menghapus koleksi"
        }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { message: "ID koleksi harus disertakan" },
                { status: 400 }
            );
        }

        const body = await request.json();
        const validatedData = UpdateCollectionSchema.parse(body);

        // Check if collection exists and not deleted
        const existingCollection = await prisma.collection.findFirst({
            where: {
                id,
                deletedAt: null
            }
        });

        if (!existingCollection) {
            return NextResponse.json(
                { message: "Koleksi tidak ditemukan" },
                { status: 404 }
            );
        }

        // Check availableCopies against totalCopies
        const newTotalCopies = validatedData.totalCopies ?? existingCollection.totalCopies;
        const newAvailableCopies = validatedData.availableCopies ?? existingCollection.availableCopies;

        if (newAvailableCopies > newTotalCopies) {
            return NextResponse.json(
                { message: "Jumlah copy tersedia tidak boleh melebihi total copy" },
                { status: 400 }
            );
        }

        // Check ISBN uniqueness if changed
        if (validatedData.isbn && validatedData.isbn !== existingCollection.isbn) {
            const duplicateISBN = await prisma.collection.findFirst({
                where: {
                    isbn: validatedData.isbn,
                    id: { not: id },
                    deletedAt: null
                }
            });

            if (duplicateISBN) {
                return NextResponse.json(
                    { message: "ISBN sudah terdaftar dalam sistem" },
                    { status: 409 }
                );
            }
        }

        // Update collection
        const updatedCollection = await prisma.collection.update({
            where: { id },
            data: validatedData
        });

        return NextResponse.json({
            success: true,
            data: updatedCollection,
            message: "Koleksi berhasil diperbarui"
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
            message: error instanceof Error ? error.message : "Terjadi kesalahan saat memperbarui koleksi"
        }, { status: 500 });
    }
}