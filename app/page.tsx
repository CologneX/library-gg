import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import BooksGrid from "../components/collection/books-grid";
import BooksPagination from "@/components/collection/books-pagination";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  // get length of collection
  const collection = await prisma.collection.findMany({
    where: {
      deletedAt: null,
    },
  });
  const collectionCount = await prisma.collection.count();
  return (
    <section className="flex flex-col h-full pb-4 gap-4">
      <div className="text-end">
        <Link href="/create">
          <Button color="primary">Tambah Koleksi</Button>
        </Link>
      </div>
      <BooksGrid {...{ collection }} />
      <div className="mt-auto flex flex-row justify-end">
        <BooksPagination page={1} total={collectionCount} />
      </div>
    </section>
  );
}
