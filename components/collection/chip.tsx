"use client";
import { Chip } from "@nextui-org/react";

export default function BookChip({ available }: { available: number }) {
  if (available > 0) {
    return (
      <Chip color="success" size="sm" variant="flat">
        Tersedia
      </Chip>
    );
  }

  return (
    <Chip color="warning" size="sm" variant="flat">
      Tidak Tersedia
    </Chip>
  );
}
