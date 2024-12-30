"use client";
import { LoginInput, loginSchema } from "@/schema/schema";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Alert,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Form,
} from "@nextui-org/react";
import { cn } from "@nextui-org/theme";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState<
    Partial<Record<keyof LoginInput, string>>
  >({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setValidation({});
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    try {
      const validatedData = loginSchema.parse(data);

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error);
        return;
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errors: Partial<Record<keyof LoginInput, string>> = {};
        err.errors.forEach((error) => {
          const path = error.path[0] as keyof LoginInput;
          errors[path] = error.message;
        });
        setValidation(errors);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h1 className={cn("text-3xl font-bold text-center")}>Masuk</h1>
      </CardHeader>
      <Form onSubmit={handleSubmit}>
        <CardBody className="flex flex-col gap-2">
          {error && (
            <Alert
              color={error.length > 0 ? "warning" : "success"}
              description={error}
              title={error.length > 0 ? "Gagal" : "Berhasil"}
            />
          )}
          <Input
            isRequired
            isInvalid={!!validation.username}
            errorMessage={validation.username}
            label="Username"
            labelPlacement="outside"
            name="username"
            placeholder="Username"
            disabled={loading}
          />
          <Input
            isRequired
            isInvalid={!!validation.password}
            errorMessage={validation.password}
            label="Password"
            labelPlacement="outside"
            name="password"
            placeholder="Password"
            type="password"
            disabled={loading}
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-2">
          <Button fullWidth type="submit" isLoading={loading}>
            Masuk
          </Button>
          <Divider />
          <Link className="text-xs text-primary" href="/register">
            Bukan member? Daftar
          </Link>
        </CardFooter>
      </Form>
    </Card>
  );
}
