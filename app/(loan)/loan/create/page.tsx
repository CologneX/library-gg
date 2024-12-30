import { redirect } from "next/navigation";

import CreateLoanForm from "./form";

import { getAuth } from "@/app/api/auth/cookie";
import { prisma } from "@/lib/prisma";

export default async function CreateLoanPage() {
  const { member } = await getAuth();

  if (!member?.isAdmin) {
    redirect("/");
  }

  // Fetch active members and collections for selectors
  const members = await prisma.member.findMany({
    select: { id: true, username: true },
  });

  const collections = await prisma.collection.findMany({
    where: {
      deletedAt: null,
      availableCopies: { gt: 0 },
    },
    select: {
      id: true,
      title: true,
      author: true,
      publisher: true,
      isbn: true,
      availableCopies: true,
    },
  });

  return <CreateLoanForm collections={collections} members={members} />;
}
