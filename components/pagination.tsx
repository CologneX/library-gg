"use client";
import { Pagination } from "@nextui-org/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function PaginationComp({
  page,
  total,
}: {
  page: number;
  total: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const totalPages = Math.ceil(total / 10);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      showControls
      total={totalPages}
      page={page}
      onChange={handlePageChange}
    />
  );
}
