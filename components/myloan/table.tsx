"use client";
import { Collection, Loan, LoanItem } from "@prisma/client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import { formatDate } from "@/lib/date";

type LoanWithRelations = Loan & {
  loanItems: (LoanItem & {
    collection: Collection;
  })[];
};

export function LoanTable({ loans }: { loans: LoanWithRelations[] | null }) {
  const columns = [
    { key: "id", label: "ID" },
    { key: "collectionTitle", label: "Koleksi" },
    { key: "loanDate", label: "Tanggal Pinjam" },
    { key: "returnDueDate", label: "Batas Kembali" },
    { key: "status", label: "Status" },
  ];

  const rows = loans?.flatMap((loan) =>
    loan.loanItems.map((item, index) => ({
      key: item.id,
      id: `LN${index + 1}`,
      collectionTitle: item.collection.title,
      loanDate: formatDate(loan.loanDate),
      returnDueDate: formatDate(loan.returnDueDate),
      status: (
        <Chip
          color={
            loan.status === "ongoing"
              ? "warning"
              : loan.status === "overdue"
                ? "danger"
                : "success"
          }
        >
          {loan.status === "ongoing"
            ? "Dipinjam"
            : loan.status === "overdue"
              ? "Terlambat"
              : "Dikembalikan"}
        </Chip>
      ),
    }))
  );

  return (
    <Table aria-label="Tabel Peminjaman">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} emptyContent="Tidak ada peminjaman aktif">
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell key={`${item.key}-${columnKey}`}>
                {item[columnKey as keyof typeof item]}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
