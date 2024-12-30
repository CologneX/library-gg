"use client";
import Image from "next/image";
import { useState } from "react";
import { Spinner } from "@nextui-org/react";

interface Props {
  isbn?: string | null;
  title: string;
}

export default function BookCover({ isbn, title }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const myLoader = ({ src }: { src: string }) => {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
  };

  if (error || !isbn) {
    return (
      <div className="relative w-full aspect-[1.5/1] bg-default-100 rounded-lg overflow-hidden flex items-center justify-center">
        <p className="text-default-500">No Cover</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[1/1.5] bg-default-100 rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner color="primary" />
        </div>
      )}
      <Image
        fill
        alt={`Cover of ${title}`}
        className="object-cover"
        loader={myLoader}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        src={`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
