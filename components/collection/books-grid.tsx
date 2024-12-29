import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Collection } from "@prisma/client";
import { getAuth } from "../../app/api/auth/cookie";
import CollectionDeleteButton from "./collection-delete-button";
import { Divider, Link } from "@nextui-org/react";
import CollectionUpdateButton from "./update-buttons";

export default async function BooksGrid({
  collection,
}: {
  collection: Collection[];
}) {
  const { member } = await getAuth();

  return (
    <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {collection.map((book) => (
        <Card key={book.id} className="flex flex-col gap-2">
          <CardBody>
            <div className="flex flex-col gap-1 text-center">
              <h2>Judul: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Publisher: {book.publisher}</p>
            </div>
          </CardBody>
          {/* <Divider /> */}
          {member?.isAdmin && (
            <CardFooter className="p-2 flex flex-row gap-2">
              <CollectionUpdateButton bookId={book.id} />
              <CollectionDeleteButton bookId={book.id} />
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
}
