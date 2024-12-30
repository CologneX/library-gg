import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { CreateLoanSchema, UpdateLoanItemsSchema } from "@/schema/schema";

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
          deletedAt: null,
        },
      });

      if (!member) {
        throw new Error("Anggota tidak ditemukan");
      }

      // Check all collections exist and have available copies
      const collections = await tx.collection.findMany({
        where: {
          id: { in: validatedData.collectionIds },
          deletedAt: null,
          availableCopies: { gt: 0 },
        },
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
            create: validatedData.collectionIds.map((collectionId) => ({
              collectionId,
            })),
          },
        },
        include: {
          loanItems: true,
        },
      });

      // Update available copies
      await Promise.all(
        collections.map((collection) =>
          tx.collection.update({
            where: { id: collection.id },
            data: { availableCopies: collection.availableCopies - 1 },
          }),
        ),
      );

      return NextResponse.json(
        {
          success: true,
          data: loan,
          message: "Peminjaman berhasil dibuat",
        },
        { status: 201 },
      );
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Data tidak valid",
          errors: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat membuat peminjaman",
      },
      { status: 500 },
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "ID peminjaman harus disertakan" },
        { status: 400 },
      );
    }

    const body = await request.json();
    const validatedData = UpdateLoanItemsSchema.parse(body);

    return await prisma.$transaction(async (tx) => {
      // Get existing loan with items
      const existingLoan = await tx.loan.findFirst({
        where: {
          id,
          deletedAt: null,
        },
        include: {
          loanItems: {
            include: {
              collection: true,
            },
          },
        },
      });

      if (!existingLoan) {
        throw new Error("Peminjaman tidak ditemukan");
      }

      // Get existing collection IDs
      const existingCollectionIds = existingLoan.loanItems.map(
        (item) => item.collectionId,
      );

      // Find collections to add and remove
      const collectionsToAdd = validatedData.collectionIds.filter(
        (id) => !existingCollectionIds.includes(id),
      );
      const collectionsToRemove = existingCollectionIds.filter(
        (id) => !validatedData.collectionIds.includes(id),
      );

      // Verify new collections are available
      if (collectionsToAdd.length > 0) {
        const newCollections = await tx.collection.findMany({
          where: {
            id: { in: collectionsToAdd },
            deletedAt: null,
            availableCopies: { gt: 0 },
          },
        });

        if (newCollections.length !== collectionsToAdd.length) {
          throw new Error("Beberapa koleksi tidak tersedia");
        }

        // Decrease available copies for new collections
        await Promise.all(
          newCollections.map((collection) =>
            tx.collection.update({
              where: { id: collection.id },
              data: { availableCopies: collection.availableCopies - 1 },
            }),
          ),
        );
      }

      // Increase available copies for removed collections
      if (collectionsToRemove.length > 0) {
        await Promise.all(
          collectionsToRemove.map((collectionId) =>
            tx.collection.update({
              where: { id: collectionId },
              data: {
                availableCopies: {
                  increment: 1,
                },
              },
            }),
          ),
        );
      }

      // Delete removed loan items
      if (collectionsToRemove.length > 0) {
        await tx.loanItem.deleteMany({
          where: {
            loanId: id,
            collectionId: { in: collectionsToRemove },
          },
        });
      }

      // Create new loan items
      if (collectionsToAdd.length > 0) {
        await tx.loanItem.createMany({
          data: collectionsToAdd.map((collectionId) => ({
            loanId: id,
            collectionId,
          })),
        });
      }

      // Get updated loan
      const updatedLoan = await tx.loan.findFirst({
        where: { id },
        include: {
          loanItems: {
            include: {
              collection: true,
            },
          },
        },
      });

      return NextResponse.json({
        success: true,
        data: updatedLoan,
        message: "Peminjaman berhasil diperbarui",
      });
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Data tidak valid",
          errors: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat memperbarui peminjaman",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "ID peminjaman harus disertakan" },
        { status: 400 },
      );
    }

    return await prisma.$transaction(async (tx) => {
      // Get existing loan with items
      const existingLoan = await tx.loan.findFirst({
        where: {
          id,
          deletedAt: null,
        },
        include: {
          loanItems: {
            include: {
              collection: true,
            },
          },
        },
      });

      if (!existingLoan) {
        throw new Error("Peminjaman tidak ditemukan");
      }

      // If loan is ongoing, restore available copies
      if (existingLoan.status === "ongoing") {
        await Promise.all(
          existingLoan.loanItems.map((item) =>
            tx.collection.update({
              where: { id: item.collectionId },
              data: {
                availableCopies: item.collection.availableCopies + 1,
              },
            }),
          ),
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
              data: { deletedAt: new Date() },
            },
          },
        },
        include: {
          loanItems: true,
        },
      });

      return NextResponse.json({
        success: true,
        data: deletedLoan,
        message: "Peminjaman berhasil dihapus",
      });
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat menghapus peminjaman",
      },
      { status: 500 },
    );
  }
}
