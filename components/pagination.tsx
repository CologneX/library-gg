"use client";
import { Pagination } from "@nextui-org/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function PaginationComp({
  page,
  total,
  limit,
}: {
  page: number;
  total: number;
  limit: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      showControls
      page={page}
      total={totalPages}
      onChange={handlePageChange}
    />
  );
}
