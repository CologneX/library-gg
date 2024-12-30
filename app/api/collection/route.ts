import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import {
  CreateCollectionSchema,
  UpdateCollectionSchema,
} from "@/schema/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = CreateCollectionSchema.parse(body);

    // Check availableCopies
    if (validatedData.availableCopies > validatedData.totalCopies) {
      return NextResponse.json(
        { message: "Jumlah copy tersedia tidak boleh melebihi total copy" },
        { status: 400 },
      );
    }

    // Check ISBN duplicate
    if (validatedData.isbn) {
      const existingCollection = await prisma.collection.findUnique({
        where: { isbn: validatedData.isbn },
      });

      if (existingCollection) {
        return NextResponse.json(
          { message: "ISBN sudah terdaftar dalam sistem" },
          { status: 409 },
        );
      }
    }

    // Create new collection
    const newCollection = await prisma.collection.create({
      data: validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        data: newCollection,
        message: "Koleksi berhasil ditambahkan",
      },
      { status: 201 },
    );
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
            : "Terjadi kesalahan saat menambahkan koleksi",
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
        { message: "ID koleksi harus disertakan" },
        { status: 400 },
      );
    }

    // Check if collection exists and not already deleted
    const existingCollection = await prisma.collection.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!existingCollection) {
      return NextResponse.json(
        { message: "Koleksi tidak ditemukan" },
        { status: 404 },
      );
    }

    // Soft delete
    const deletedCollection = await prisma.collection.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        availableCopies: 0,
      },
    });

    return NextResponse.json({
      success: true,
      data: deletedCollection,
      message: "Koleksi berhasil dihapus",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat menghapus koleksi",
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
        { message: "ID koleksi harus disertakan" },
        { status: 400 },
      );
    }

    const body = await request.json();
    const validatedData = UpdateCollectionSchema.parse(body);

    // Check if collection exists and not deleted
    const existingCollection = await prisma.collection.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!existingCollection) {
      return NextResponse.json(
        { message: "Koleksi tidak ditemukan" },
        { status: 404 },
      );
    }

    // Check availableCopies against totalCopies
    const newTotalCopies =
      validatedData.totalCopies ?? existingCollection.totalCopies;
    const newAvailableCopies =
      validatedData.availableCopies ?? existingCollection.availableCopies;

    if (newAvailableCopies > newTotalCopies) {
      return NextResponse.json(
        { message: "Jumlah copy tersedia tidak boleh melebihi total copy" },
        { status: 400 },
      );
    }

    // Check ISBN uniqueness if changed
    if (validatedData.isbn && validatedData.isbn !== existingCollection.isbn) {
      const duplicateISBN = await prisma.collection.findFirst({
        where: {
          isbn: validatedData.isbn,
          id: { not: id },
          deletedAt: null,
        },
      });

      if (duplicateISBN) {
        return NextResponse.json(
          { message: "ISBN sudah terdaftar dalam sistem" },
          { status: 409 },
        );
      }
    }

    // Update collection
    const updatedCollection = await prisma.collection.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json({
      success: true,
      data: updatedCollection,
      message: "Koleksi berhasil diperbarui",
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
            : "Terjadi kesalahan saat memperbarui koleksi",
      },
      { status: 500 },
    );
  }
}
