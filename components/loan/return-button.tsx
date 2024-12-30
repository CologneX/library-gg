"use client";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoanReturnButton({ loanId }: { loanId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleReturn = async () => {
    if (!confirm("Apakah anda yakin ingin mengembalikan peminjaman ini?")) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/loan/return", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loanId }),
      });

      if (!response.ok) {
        throw new Error("Gagal mengembalikan peminjaman");
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
      className="grow"
      color="success"
      isLoading={isLoading}
      size="sm"
      onPress={handleReturn}
    >
      Kembalikan
    </Button>
  );
}
