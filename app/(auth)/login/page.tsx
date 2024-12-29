"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Form,
} from "@nextui-org/react";
import { cn } from "@nextui-org/theme";
import Link from "next/link";
import { signIn } from "../../api/auth/actions/signIn";

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <h1 className={cn("text-3xl font-bold text-center")}>Masuk</h1>
      </CardHeader>
      <Form validationBehavior="native" action={signIn}>
        <CardBody className="flex flex-col gap-2">
          <Input
            placeholder="Username"
            name="username"
            isRequired
            errorMessage="Please enter a valid Username"
            label="Username"
            labelPlacement="outside"
          />
          <Input
            placeholder="Password"
            name="password"
            isRequired
            errorMessage="Please enter a valid Password"
            label="Password"
            labelPlacement="outside"
            type="password"
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-2">
          <Button type="submit" fullWidth>
            Masuk
          </Button>
          <Divider />
          <Link href="/register" className="text-xs text-primary">
            Bukan member? Daftar
          </Link>
        </CardFooter>
      </Form>
    </Card>
  );
}
