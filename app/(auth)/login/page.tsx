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
      <Form action={signIn} validationBehavior="native">
        <CardBody className="flex flex-col gap-2">
          <Input
            isRequired
            errorMessage="Please enter a valid Username"
            label="Username"
            labelPlacement="outside"
            name="username"
            placeholder="Username"
          />
          <Input
            isRequired
            errorMessage="Please enter a valid Password"
            label="Password"
            labelPlacement="outside"
            name="password"
            placeholder="Password"
            type="password"
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-2">
          <Button fullWidth type="submit">
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
