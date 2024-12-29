"use client";
import { Pagination } from "@nextui-org/react";

export default function LoanPagination({
  page,
  total,
//   onPageChange,
}: {
  page: number;
  total: number;
//   onPageChange: (page: number) => void;
}) {
  const totalPages = Math.ceil(total / 10);

  return (
    <Pagination
      showControls
      total={totalPages}
      initialPage={page}
    //   onChange={(page) => onPageChange(page)}
    />
  );
}
