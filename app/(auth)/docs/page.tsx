import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Form, Divider, cn, Link } from "@nextui-org/react";

import { signIn } from "@/app/api/auth/actions/signIn";

export default function DocsPage() {
  return (
    <section className="flex items-center justify-center w-full h-full">
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
    </section>
  );
}
