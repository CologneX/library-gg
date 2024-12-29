import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAuth } from "@/app/api/auth/cookie";
import LoanTable from "@/components/loan/table";
import PaginationComp from "@/components/pagination";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default async function LoanPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const { member } = await getAuth();
  if (!member) {
    return redirect("/login");
  }
  const currentPage = Number(searchParams.page) || 1;
  const limit = 10;
  const skip = (currentPage - 1) * limit;

  const [loans, total] = await Promise.all([
    prisma.loan.findMany({
      include: {
        member: true,
        loanItems: {
          include: {
            collection: true,
          },
        },
      },
      take: limit,
      skip,
      orderBy: {
        loanDate: "desc",
      },
    }),
    prisma.loan.count({
      where: {
        deletedAt: null,
      },
    }),
  ]);

  return (
    <section className="flex flex-col h-full pb-4 gap-4 w-full">
      <div className="text-end">
        <Link href="/loan/create">
          <Button color="primary">Tambah Pinjam</Button>
        </Link>
      </div>
      <LoanTable {...{ loans }} />
      <div className="flex flex-row justify-end">
        <PaginationComp page={currentPage} total={total} />
      </div>
    </section>
  );
}
