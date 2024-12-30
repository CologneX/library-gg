import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function CollectionUpdateButton({ bookId }: { bookId: string }) {
  return (
    <Link className="w-full" href={`/update/${bookId}`}>
      <Button fullWidth size="sm">
        Ubah
      </Button>
    </Link>
  );
}
