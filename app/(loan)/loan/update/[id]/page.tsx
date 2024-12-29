import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import UpdateLoanForm from "./form";
import { getAuth } from "@/app/api/auth/cookie";
import { Metadata } from "next";

interface PageProps {
  params: {
    id: string;
  };
}

async function getLoan(id: string) {
  const loan = await prisma.loan.findFirst({
    where: {
      id,
      deletedAt: null,
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
}: PageProps): Promise<Metadata> {
  const collection = await getLoan(params.id);

  return {
    title: `Update Loan: ${collection.member.username}`,
  };
}

export default async function UpdateLoanPage({ params }: PageProps) {
  const { id } = await params;
  const [{ member }, loan] = await Promise.all([getAuth(), getLoan(id)]);

  if (!member?.isAdmin) {
    notFound();
  }

  return <UpdateLoanForm {...{ loan }} />;
}
