"use client";

import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Member } from "@prisma/client";

import { HeartFilledIcon } from "./icons";

import { signOut } from "@/app/api/auth/actions/sign-out";

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
          key="delete"
          className="text-danger"
          color="danger"
          onPress={signOut}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
