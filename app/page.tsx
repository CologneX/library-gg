import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import BooksGrid from "../components/collection/books-grid";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import PaginationComp from "@/components/pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const limit = 10;
  const skip = (currentPage - 1) * limit;

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
      <div className="text-end">
        <Link href="/create">
          <Button color="primary">Tambah Koleksi</Button>
        </Link>
      </div>
      <BooksGrid collection={collection} />
      <div className="mt-auto flex flex-row justify-end">
        <PaginationComp page={currentPage} total={total} />
      </div>
    </section>
  );
}
