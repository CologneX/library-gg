"use client";
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
        <h1 className={cn("text-2xl font-bold text-center w-full")}>
          Register
        </h1>
      </CardHeader>
      <Form action={signUp} validationBehavior="native">
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
          <Input
            isRequired
            errorMessage="Please enter a valid Password"
            label="Confirm Password"
            labelPlacement="outside"
            name="confirmPassword"
            placeholder="Password"
            type="password"
          />
        </CardBody>
        <CardFooter>
          <Button fullWidth type="submit">
            Daftar
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
