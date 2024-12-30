"use client";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2Icon } from "lucide-react";

export default function MemberDeleteButton({ memberId }: { memberId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Apakah anda yakin ingin menonaktifkan anggota ini?")) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/member?id=${memberId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Gagal menonaktifkan anggota");
      }

      router.refresh();
    } catch (error) {
      alert("Terjadi kesalahan sistem");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      isIconOnly
      color="danger"
      isLoading={isLoading}
      size="sm"
      onPress={handleDelete}
    >
      <Trash2Icon className="size-4" />
    </Button>
  );
}
