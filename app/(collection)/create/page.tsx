"use client";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { title } from "@/components/primitives";
import { ApiError } from "@/types/api";

export default function CreateCollection() {
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
      const response = await fetch("/api/collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrors(result.errors || []);
        setMessage(result.message);
        setIsLoading(false);

        return;
      }

      setMessage(result.message);
      router.push("/");
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
      <CardHeader className={title()}>Tambah Koleksi</CardHeader>
      <Form onSubmit={handleSubmit}>
        <CardBody className="space-y-3">
          {message && (
            <Alert
              color={errors.length > 0 ? "warning" : "success"}
              description={message}
              title={errors.length > 0 ? "Gagal" : "Berhasil"}
            />
          )}

          <Input
            isRequired
            errorMessage={getFieldError("title")}
            isInvalid={!!getFieldError("title")}
            label="Judul"
            name="title"
          />

          <Input
            errorMessage={getFieldError("author")}
            isInvalid={!!getFieldError("author")}
            label="Penulis"
            name="author"
          />

          <Input
            errorMessage={getFieldError("publisher")}
            isInvalid={!!getFieldError("publisher")}
            label="Penerbit"
            name="publisher"
          />

          <Input
            errorMessage={getFieldError("isbn")}
            isInvalid={!!getFieldError("isbn")}
            label="ISBN"
            name="isbn"
          />

          <Input
            errorMessage={getFieldError("yearPublished")}
            isInvalid={!!getFieldError("yearPublished")}
            label="Tahun Terbit"
            name="yearPublished"
            type="number"
          />

          <Input
            errorMessage={getFieldError("totalCopies")}
            isInvalid={!!getFieldError("totalCopies")}
            label="Total Copy"
            min={1}
            name="totalCopies"
            type="number"
          />

          <Input
            errorMessage={getFieldError("availableCopies")}
            isInvalid={!!getFieldError("availableCopies")}
            label="Copy Tersedia"
            min={0}
            name="availableCopies"
            type="number"
          />
        </CardBody>

        <CardFooter>
          <Button
            fullWidth
            className="mt-auto"
            isDisabled={isLoading}
            isLoading={isLoading}
            type="submit"
          >
            Tambah
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
