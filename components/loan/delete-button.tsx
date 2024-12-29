"use client";
import { Button } from "@nextui-org/button";
import { Alert, Card, CardBody, cn } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2Icon } from "lucide-react";

interface Props {
  bookId: string;
}

export default function LoanDeleteButton({ bookId }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!confirm("Apakah anda yakin ingin menghapus loan ini?")) {
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch(`/api/loan?id=${bookId}`, {
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
      setMessage("Terjadi kesalahan saat menghapus loan");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      color="danger"
      size="sm"
      isIconOnly
      isLoading={isLoading}
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
