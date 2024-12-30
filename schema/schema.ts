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

export const UpdateCollectionSchema = z.object({
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

export const CreateLoanSchema = z
    .object({
        memberId: z.string({
            required_error: "Anggota harus dipilih",
        }),
        collectionIds: z.array(z.string()).min(1, {
            message: "Minimal harus meminjam 1 koleksi"
        }),
        loanDate: z.coerce.date({
            required_error: "Tanggal peminjaman harus diisi",
        }),
        returnDueDate: z.coerce.date({
            required_error: "Tanggal pengembalian harus diisi",
        }),
    })
    .refine((data) => data.returnDueDate > data.loanDate, {
        message: "Tanggal kembali harus lebih besar daripada tanggal pinjam",
        path: ["returnDueDate"]
    });

export const ReturnLoanSchema = z.object({
    loanId: z.string({
        required_error: "ID peminjaman harus disertakan",
    })
});

export const UpdateLoanItemsSchema = z.object({
    collectionIds: z.array(z.string()).min(1, {
        message: "Minimal harus meminjam 1 koleksi"
    })
});