import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { registerSchema } from "@/schema/schema";
import { z } from "zod";
import { setSessionCookie } from "../cookie";
import { hashPassword } from "../password";
import { generateRandomSessionToken, createSession } from "../session";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = registerSchema.parse(body);

    const passwordHash = await hashPassword(validatedData.password);

    const member = await prisma.member.create({
      data: {
        username: validatedData.username,
        isAdmin: false,
        passwordHash: passwordHash,
      },
    });

    const sessionToken = generateRandomSessionToken();
    const session = await createSession(sessionToken, member.id);

    const response = NextResponse.json(
      { success: true },
      { status: 201 }
    );

    await setSessionCookie(sessionToken, session.expiresAt);
    return response;

  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {};
      error.errors.forEach((err) => {
        const field = err.path[0].toString();
        if (!errors[field]) {
          errors[field] = [];
        }
        errors[field].push(err.message);
      });

      return NextResponse.json(
        { error: "Validation failed", validationErrors: errors },
        { status: 400 }
      );
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: "Username sudah digunakan" },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}