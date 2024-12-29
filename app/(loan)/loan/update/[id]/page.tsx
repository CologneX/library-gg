import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAuth } from "@/app/api/auth/cookie";
import { Metadata } from "next";
import UpdateLoanForm from "./form";
import { PageParam } from "@/types/param";

async function getLoan(id: string) {
  const loan = await prisma.loan.findFirst({
    where: {
      id,
    },
    include: {
      member: true,
      loanItems: {
        include: {
          collection: true,
        },
      },
    },
  });

  if (!loan) {
    notFound();
  }

  return loan;
}

export async function generateMetadata({
  params,
}: PageParam): Promise<Metadata> {
  const { id } = await params;
  const loan = await getLoan(id);

  return {
    title: `Update Loan: ${loan.member.username}`,
  };
}

export default async function UpdateLoanPage({ params }: PageParam) {
  const { id } = await params;
  const { member } = await getAuth();

  if (!member?.isAdmin) {
    notFound();
  }

  const loan = await getLoan(id);

  // Get available collections for adding to loan
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

  return <UpdateLoanForm loan={loan} collections={collections} />;
}
