import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAuth } from "@/app/api/auth/cookie";
import { LoanTable } from "@/components/myloan/table";

export default async function MyLoanPage() {
  const { member } = await getAuth();

  if (!member || member.isAdmin) {
    return redirect("/login");
  }

  const latestLoan = await prisma.loan.findFirst({
    where: {
      memberId: member.id,
      status: {
        in: ["ongoing", "overdue"],
      },
    },
    include: {
      loanItems: {
        include: {
          collection: true,
        },
      },
    },
    orderBy: {
      loanDate: "desc",
    },
  });

  return (
    <section className="flex flex-col h-full pb-4 gap-4 w-full">
      <LoanTable loans={[latestLoan!]} />
    </section>
  );
}
