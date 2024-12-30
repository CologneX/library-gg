import { Button } from "@nextui-org/react";
import Link from "next/link";

import BooksGrid from "../components/collection/books-grid";

import { getAuth } from "./api/auth/cookie";

import { prisma } from "@/lib/prisma";
import PaginationComp from "@/components/pagination";

export default async function Home(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams.page) || 1;
  const limit = 15;
  const skip = (currentPage - 1) * limit;

  const { member } = await getAuth();

  const [collection, total] = await Promise.all([
    prisma.collection.findMany({
      take: limit,
      skip,
      orderBy: {
        title: "asc",
      },
    }),
    prisma.collection.count({
      where: {
        deletedAt: null,
      },
    }),
  ]);

  return (
    <section className="flex flex-col h-full pb-4 gap-4">
      {member?.isAdmin && (
        <div className="text-end">
          <Link href="/create">
            <Button color="primary">Tambah Koleksi</Button>
          </Link>
        </div>
      )}

      <BooksGrid collection={collection} />
      <div className="flex flex-row justify-end">
        <PaginationComp limit={limit} page={currentPage} total={total} />
      </div>
    </section>
  );
}
