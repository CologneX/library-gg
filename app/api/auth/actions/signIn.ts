"use server";

import { redirect } from "next/navigation";

import { setSessionCookie } from "../cookie";
import { verifyPasswordHash } from "../password";
import { generateRandomSessionToken, createSession } from "../session";

import { prisma } from "@/lib/prisma";

const signIn = async (formData: FormData) => {
  const formDataRaw = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };

  // TODO: validate formDataRaw (and retrieve typed formData) before proceeding
  // https://www.robinwieruch.de/next-forms/

  try {
    const member = await prisma.member.findUnique({
      where: {
        username: formDataRaw.username,
      },
      select: {
        id: true,
        passwordHash: true,
        isAdmin: true,
      },
    });

    if (!member) {
      // https://www.robinwieruch.de/next-forms/
      throw new Error("Incorrect email or password");
    }

    const validPassword = await verifyPasswordHash(
      member.passwordHash,
      formDataRaw.password,
    );

    if (!validPassword) {
      // https://www.robinwieruch.de/next-forms/
      throw new Error("Incorrect email or password");
    }

    const sessionToken = generateRandomSessionToken();
    const session = await createSession(sessionToken, member.id);

    await setSessionCookie(sessionToken, session.expiresAt);
  } catch (error) {
    // TODO: error handling
    // https://www.robinwieruch.de/next-forms/
  }

  redirect("/");
};

export { signIn };
