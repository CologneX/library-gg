"use client";
import { useState } from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

interface Props {
  isbn?: string | null;
  title: string;
}

export default function BookCover({ isbn, title }: Props) {
  const [error, setError] = useState(false);

  const myLoader = ({ src }: { src: string }) => {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
  };

  if (error || !isbn) {
    return (
      <div className="relative w-full aspect-[1/2] bg-default-100 rounded-lg overflow-hidden flex items-center justify-center">
        <p className="text-default-500">No Cover</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[1/2] bg-default-100 rounded-lg overflow-hidden">
      <Image
        // loader={myLoader}
        alt={`Cover of ${title}`}
        as={NextImage}
        height={480}
        src={`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}
        width={768}
        onError={() => {
          setError(true);
        }}
      />
    </div>
  );
}
