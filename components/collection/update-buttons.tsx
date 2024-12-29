import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function CollectionUpdateButton({ bookId }: { bookId: string }) {
  return (
    <Link href={`/update/${bookId}`} className="w-full">
      <Button fullWidth size="sm">
        Ubah
      </Button>
    </Link>
  );
}
