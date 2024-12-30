"use client";
import { Badge } from "@nextui-org/react";

export default function BookBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge color="default" content="Book" variant="solid">
      {children}
    </Badge>
  );
}
