"use client";

import { signOut } from "@/app/api/auth/actions/sign-out";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { HeartFilledIcon } from "./icons";
import { Member } from "@prisma/client";

export default function ProfileButton({ member }: { member: Member }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className="text-sm font-normal text-default-600 bg-default-100"
          startContent={<HeartFilledIcon className="text-danger" />}
          variant="flat"
        >
          {member?.username}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          onPress={signOut}
          key="delete"
          className="text-danger"
          color="danger"
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
