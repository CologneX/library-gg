import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { getAuth } from "@/app/api/auth/cookie";
import MemberTable from "@/components/member/table";
import PaginationComp from "@/components/pagination";

export default async function MemberPage(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const { member } = await getAuth();

  if (!member?.isAdmin || !member) {
    return redirect("/");
  }

  const currentPage = Number(searchParams.page) || 1;
  const limit = 10;
  const skip = (currentPage - 1) * limit;

  const [members, total] = await Promise.all([
    prisma.member.findMany({
      select: {
        id: true,
        username: true,
        isAdmin: true,
        createdAt: true,
        deletedAt: true,
      },
      take: limit,
      skip,
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.member.count(),
  ]);

  return (
    <section className="flex flex-col h-full pb-4 gap-4 w-full">
      <MemberTable members={members} />
      <div className="mt-auto flex flex-row justify-end">
        <PaginationComp limit={limit} page={currentPage} total={total} />
      </div>
    </section>
  );
}
