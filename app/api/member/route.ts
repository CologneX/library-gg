import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { message: "ID anggota harus disertakan" },
                { status: 400 }
            );
        }

        const member = await prisma.member.findFirst({
            where: {
                id,
                deletedAt: null
            }
        });

        if (!member) {
            return NextResponse.json(
                { message: "Anggota tidak ditemukan" },
                { status: 404 }
            );
        }

        const updatedMember = await prisma.member.update({
            where: { id },
            data: { deletedAt: new Date() }
        });

        return NextResponse.json({
            success: true,
            message: "Anggota berhasil dinonaktifkan"
        });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Terjadi kesalahan saat menonaktifkan anggota"
        }, { status: 500 });
    }
}