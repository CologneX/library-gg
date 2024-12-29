import BooksPagination from "@/components/collection/books-pagination";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAuth } from "@/app/api/auth/cookie";
import BooksGrid from "@/components/collection/books-grid";
import LoanTable from "@/components/loan/table";
import LoanPagination from "@/components/loan/pagination";

export default async function LoanPage() {
  const { member } = await getAuth();
  if (!member) {
    return redirect("/login");
  }
  // return data and the count of loans
  const loans = await prisma.loan.findMany();
  console.log(loans);
  return (
    <section className="flex flex-col h-full pb-4 gap-4">
      <LoanTable {...{ loans }} />
      <div className="flex flex-row justify-end">
        <LoanPagination page={1} total={1000} />
      </div>
    </section>
  );
}
