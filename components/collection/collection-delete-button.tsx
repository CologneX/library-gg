"use client";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2Icon } from "lucide-react";

interface Props {
  bookId: string;
}

export default function CollectionDeleteButton({ bookId }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!confirm("Apakah anda yakin ingin menghapus koleksi ini?")) {
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch(`/api/collection?id=${bookId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.message);

        return;
      }
      setMessage(result.message);

      // Refresh the page after successful deletion

      router.refresh();
    } catch (error) {
      setMessage("Terjadi kesalahan saat menghapus koleksi");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      isIconOnly
      color="danger"
      isLoading={isLoading}
      size="sm"
      onClick={handleDelete}
    >
      {!isLoading && <Trash2Icon className="size-4" />}
    </Button>
    // <div className="flex flex-row gap-2 w-full h-full items-end justify-end">
    //  {message && (
    //   <Card className={cn("w-full", { "bg-danger": message })}>
    //     <CardBody className="p-1 px-2">{message}</CardBody>
    //   </Card>
    // )}

    // </div>
  );
}
