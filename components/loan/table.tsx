"use client";
import { Loan } from "@prisma/client";
import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import LoanUpdateButton from "./update-buttons";
import { formatDate } from "@/lib/date";
import { Key, useCallback } from "react";
import LoanReturnButton from "./return-button";
import LoanDeleteButton from "./delete-button";

export default function LoanTable({ loans }: { loans: Loan[] }) {
  // id: string;
  // memberId: string;
  // loanDate: Date;
  // returnDueDate: Date;
  // returnDate: Date | null;
  // status: $Enums.LoanStatus;
  // editedAt: Date | null;
  // deletedAt: Date | null;

  const loanStatusString = (status: string) => {
    switch (status) {
      case "ongoing":
        return "Dipinjam";
      case "returned":
        return "Dikembalikan";
      case "overdue":
        return "Terlambat";
    }
  };

  const columns = [
    { key: "id", label: "ID" },
    { key: "loanDate", label: "Tanggal Pinjam" },
    { key: "returnDueDate", label: "Tanggal Kembali" },
    { key: "returnDate", label: "Tanggal Dikembalikan" },
    { key: "status", label: "Status" },
    { key: "action", label: "Aksi" },
  ];
  const renderCell = useCallback((loan: (typeof rows)[0], columnKey: Key) => {
    switch (columnKey) {
      case "action":
        return (
          <div className="flex flex-row gap-2 w-full">
            <LoanUpdateButton loanId={loan.key} />
            {loan.status === "Dipinjam" && (
              <LoanReturnButton loanId={loan.key} />
            )}
            {/* {loan.} */}
            <LoanDeleteButton loanId={loan.key} />
          </div>
        );
      case "status":
        return loan.status;
      default:
        return loan[columnKey as keyof typeof loan];
    }
  }, []);

  const rows = loans.map((loan, index) => ({
    key: loan.id,
    id: `LN${index + 1}`,
    loanDate: formatDate(loan.loanDate),
    returnDueDate: formatDate(loan.returnDueDate),
    returnDate: loan.returnDate ? formatDate(loan.returnDate) : "-",
    status: loanStatusString(loan.status),
  }));

  return (
    <Table aria-label="Tabel Peminjaman">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} emptyContent={"Tidak ada data peminjaman"}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell key={`${item.key}-${columnKey}`}>
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
