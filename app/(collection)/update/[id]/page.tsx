import { notFound } from "next/navigation";
import { getAuth } from "@/app/api/auth/cookie";
import { prisma } from "@/lib/prisma";
import UpdateCollectionForm from "./form";

export default async function UpdateCollectionPage({
  params,
}: {
  params: { id: string };
}) {
  const { member } = await getAuth();

  if (!member?.isAdmin) {
    notFound();
  }

  const collection = await prisma.collection.findFirst({
    where: {
      id: params.id,
      deletedAt: null,
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
