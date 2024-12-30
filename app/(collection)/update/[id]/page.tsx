import { notFound } from "next/navigation";

import UpdateCollectionForm from "./form";

import { getAuth } from "@/app/api/auth/cookie";
import { prisma } from "@/lib/prisma";
import { PageParam } from "@/types/param";

export default async function UpdateCollectionPage({ params }: PageParam) {
  const { id } = await params;
  const { member } = await getAuth();

  if (!member?.isAdmin) {
    notFound();
  }

  const collection = await prisma.collection.findFirst({
    where: {
      id,
    },
  });

  if (!collection) {
    notFound();
  }

  return (
    <UpdateCollectionForm
      {...{
        collection,
      }}
    />
  );
}
