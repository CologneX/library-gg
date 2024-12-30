import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Collection } from "@prisma/client";

import { getAuth } from "../../app/api/auth/cookie";

import CollectionDeleteButton from "./collection-delete-button";
import CollectionUpdateButton from "./update-buttons";
import BookCover from "./image";
import BookChip from "./chip";

export default async function BooksGrid({
  collection,
}: {
  collection: Collection[];
}) {
  const { member } = await getAuth();

  return (
    <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {collection.map((book) => (
        <Card key={book.id} className="flex flex-col gap-2" isHoverable>
          <BookCover {...{ isbn: book.isbn, title: book.title }} />
          <CardBody>
            <div className="flex flex-col text-start">
              <div className="text-end">
                <BookChip available={book.availableCopies} />
              </div>
              <p className="font-light text-sm">{book.author}</p>
              <h3 className="font-semibold">{book.title}</h3>
              <div className="mt-4">
                {book.publisher && (
                  <p className="text-xs">Publisher: {book.publisher}</p>
                )}
                <p className="text-xs">Tahun: {book.yearPublished}</p>
                <p className="text-xs font-medium">ISBN: {book.isbn}</p>
              </div>
            </div>
          </CardBody>
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
