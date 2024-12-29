"use client";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
} from "@nextui-org/react";
import { cn } from "@nextui-org/theme";
import { signUp } from "../../api/auth/actions/register";

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader>
        <h1 className={cn("text-2xl font-bold text-center w-full")}>Register</h1>
      </CardHeader>
      <Form validationBehavior="native" action={signUp}>
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
          <Input
            placeholder="Password"
            name="confirmPassword"
            isRequired
            errorMessage="Please enter a valid Password"
            label="Confirm Password"
            labelPlacement="outside"
            type="password"
          />
        </CardBody>
        <CardFooter>
          <Button type="submit" fullWidth>Daftar</Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
