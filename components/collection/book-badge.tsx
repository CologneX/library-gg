"use client";
import { Badge } from "@nextui-org/react";

export default function BookBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge variant="solid" color="default" content="Book">
      {children}
    </Badge>
  );
}
