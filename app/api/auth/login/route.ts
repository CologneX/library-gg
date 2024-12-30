import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { setSessionCookie } from "../cookie";
import { verifyPasswordHash } from "../password";
import { generateRandomSessionToken, createSession } from "../session";

import { prisma } from "@/lib/prisma";
import { loginSchema } from "@/schema/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = loginSchema.parse(body);

    const member = await prisma.member.findUnique({
      where: { username: validatedData.username },
      select: {
        id: true,
        passwordHash: true,
        isAdmin: true,
      },
    });

    if (!member) {
      return NextResponse.json(
        { error: "Username atau password salah" },
        { status: 401 },
      );
    }

    const validPassword = await verifyPasswordHash(
      member.passwordHash,
      validatedData.password,
    );

    if (!validPassword) {
      return NextResponse.json(
        { error: "Username atau password salah" },
        { status: 401 },
      );
    }

    const sessionToken = generateRandomSessionToken();
    const session = await createSession(sessionToken, member.id);

    const response = NextResponse.json(
      { success: true, message: "Login berhasil" },
      { status: 200 },
    );

    await setSessionCookie(sessionToken, session.expiresAt);

    return response;
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Terjadi kesalahan",
      },
      { status: 500 },
    );
  }
}
