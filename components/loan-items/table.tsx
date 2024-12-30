// "use client";
// import { LoanItem } from "@prisma/client";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableColumn,
//   TableHeader,
//   TableRow,
// } from "@nextui-org/react";
// import { formatDate } from "@/lib/date";
// import { Key, useCallback } from "react";

// export default function LoanItemsTable({ loans }: { loans: LoanItem[] }) {
//   // id: string;
//   // memberId: string;
//   // loanDate: Date;
//   // returnDueDate: Date;
//   // returnDate: Date | null;
//   // status: $Enums.LoanStatus;
//   // editedAt: Date | null;
//   // deletedAt: Date | null;

//   const loanStatusString = (status: string) => {
//     switch (status) {
//       case "ongoing":
//         return "Dipinjam";
//       case "returned":
//         return "Dikembalikan";
//       case "overdue":
//         return "Terlambat";
//     }
//   };

//   const columns = [
//     { key: "id", label: "ID" },
//     { key: "loanDate", label: "Tanggal Pinjam" },
//     { key: "returnDueDate", label: "Tanggal Kembali" },
//     { key: "returnDate", label: "Tanggal Dikembalikan" },
//     { key: "status", label: "Status" },
//     { key: "action", label: "Aksi" },
//   ];
//   const renderCell = useCallback((loan: (typeof rows)[0], columnKey: Key) => {
//     switch (columnKey) {
//       // case "action":
//       //   return <LoanUpdateButton loanId={loan.key} />;
//       case "status":
//         return loan.status;
//       default:
//         return loan[columnKey as keyof typeof loan];
//     }
//   }, []);

//   const rows = loans.map((loan, index) => ({
//     key: loan.id,
//     id: `LN${index + 1}`,
//     loanDate: formatDate(loan.loanDate),
//     returnDueDate: formatDate(loan.returnDueDate),
//     returnDate: loan.returnDate ? formatDate(loan.returnDate) : "-",
//     status: loanStatusString(loan.status),
//   }));

//   return (
//     <Table aria-label="Tabel Peminjaman">
//       <TableHeader columns={columns}>
//         {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
//       </TableHeader>
//       <TableBody items={rows} emptyContent={"Tidak ada data peminjaman"}>
//         {(item) => (
//           <TableRow key={item.key}>
//             {(columnKey) => (
//               <TableCell key={`${item.key}-${columnKey}`}>
//                 {renderCell(item, columnKey)}
//               </TableCell>
//             )}
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );
// }

"use client";
import { Collection, LoanItem } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

type LoanItemWithCollection = LoanItem & {
  collection: Collection;
};

export default function LoanItemsTable({
  items,
}: {
  items: LoanItemWithCollection[];
}) {
  const columns = [
    { key: "title", label: "Judul" },
    { key: "author", label: "Penulis" },
    { key: "publisher", label: "Penerbit" },
    { key: "isbn", label: "ISBN" },
  ];

  const rows = items.map((item) => ({
    key: item.id,
    title: item.collection.title,
    author: item.collection.author || "-",
    publisher: item.collection.publisher || "-",
    isbn: item.collection.isbn || "-",
  }));

  return (
    <Table aria-label="Tabel Koleksi Dipinjam">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent={"Tidak ada koleksi dipinjam"} items={rows}>
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
