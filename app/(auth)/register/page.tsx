"use client";
import { RegisterInput, registerSchema } from "@/schema/schema";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Alert,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  Spinner,
} from "@nextui-org/react";
import { cn } from "@nextui-org/theme";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState<
    Partial<Record<keyof RegisterInput, string>>
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
      confirmPassword: formData.get("confirmPassword") as string,
    };

    try {
      const validatedData = registerSchema.parse(data);

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 400 && result.validationErrors) {
          const errors: Partial<Record<keyof RegisterInput, string>> = {};
          Object.entries(result.validationErrors).forEach(
            ([field, messages]) => {
              errors[field as keyof RegisterInput] = Array.isArray(messages)
                ? messages[0]
                : messages;
            }
          );
          setValidation(errors);
        } else {
          setError(result.error);
        }
        return;
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errors: Partial<Record<keyof RegisterInput, string>> = {};
        err.errors.forEach((error) => {
          const path = error.path[0] as keyof RegisterInput;
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
        <h1 className={cn("text-2xl font-bold text-center w-full")}>
          Register
        </h1>
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
          <Input
            isRequired
            isInvalid={!!validation.confirmPassword}
            errorMessage={validation.confirmPassword}
            label="Confirm Password"
            labelPlacement="outside"
            name="confirmPassword"
            placeholder="Password"
            type="password"
            disabled={loading}
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-2">
          <Button fullWidth type="submit" isLoading={loading}>
            Daftar
          </Button>
          <Link className="text-xs text-primary" href="/login">
            Sudah punya akun? Masuk
          </Link>
        </CardFooter>
      </Form>
    </Card>
  );
}
