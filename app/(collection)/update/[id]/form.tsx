"use client";
import { title } from "@/components/primitives";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import { Collection } from "@prisma/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ApiError } from "@/types/api";

interface Props {
  collection: Collection;
}

export default function UpdateCollectionForm({ collection }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ApiError[]>([]);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setErrors([]);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const data = {
      title: formData.get("title") as string,
      author: formData.get("author") as string,
      publisher: formData.get("publisher") as string,
      yearPublished: parseInt(formData.get("yearPublished") as string),
      isbn: formData.get("isbn") as string,
      totalCopies: parseInt(formData.get("totalCopies") as string),
      availableCopies: parseInt(formData.get("availableCopies") as string),
    };

    try {
      const response = await fetch(`/api/collection?id=${collection.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrors(result.errors || []);
        setMessage(result.message);
        return;
      }

      setMessage(result.message);
      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1000);
    } catch (error) {
      setMessage("Terjadi kesalahan sistem");
    } finally {
      setIsLoading(false);
    }
  }

  const getFieldError = (fieldName: string) => {
    return errors.find((error) => error.field === fieldName)?.message;
  };

  return (
    <Card className="flex flex-col mx-auto max-w-md">
      <CardHeader className={title()}>Ubah Koleksi</CardHeader>
      <form onSubmit={handleSubmit}>
        <CardBody className="space-y-3">
          {message && (
            <Alert
              color={errors.length > 0 ? "warning" : "success"}
              title={errors.length > 0 ? "Gagal" : "Berhasil"}
              description={message}
            />
          )}

          <Input
            name="title"
            isRequired
            label="Judul"
            defaultValue={collection.title}
            isInvalid={!!getFieldError("title")}
            errorMessage={getFieldError("title")}
          />

          <Input
            name="author"
            label="Penulis"
            defaultValue={collection.author || ""}
            isInvalid={!!getFieldError("author")}
            errorMessage={getFieldError("author")}
          />

          <Input
            name="publisher"
            label="Penerbit"
            defaultValue={collection.publisher || ""}
            isInvalid={!!getFieldError("publisher")}
            errorMessage={getFieldError("publisher")}
          />

          <Input
            name="isbn"
            label="ISBN"
            defaultValue={collection.isbn || ""}
            isInvalid={!!getFieldError("isbn")}
            errorMessage={getFieldError("isbn")}
          />

          <Input
            type="number"
            name="yearPublished"
            label="Tahun Terbit"
            defaultValue={collection.yearPublished?.toString()}
            isInvalid={!!getFieldError("yearPublished")}
            errorMessage={getFieldError("yearPublished")}
          />

          <Input
            name="totalCopies"
            type="number"
            min={1}
            label="Total Copy"
            defaultValue={collection.totalCopies.toString()}
            isInvalid={!!getFieldError("totalCopies")}
            errorMessage={getFieldError("totalCopies")}
          />

          <Input
            name="availableCopies"
            type="number"
            label="Copy Tersedia"
            min={0}
            defaultValue={collection.availableCopies.toString()}
            isInvalid={!!getFieldError("availableCopies")}
            errorMessage={getFieldError("availableCopies")}
          />
        </CardBody>

        <CardFooter>
          <Button
            type="submit"
            fullWidth
            className="mt-auto"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Simpan
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
