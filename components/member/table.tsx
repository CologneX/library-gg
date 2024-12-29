"use client";
import { Member } from "@prisma/client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import { Key } from "react";
import { formatDate } from "@/lib/date";
import MemberDeleteButton from "./delete-button";

interface Props {
  members: Pick<
    Member,
    "id" | "username" | "isAdmin" | "createdAt" | "deletedAt"
  >[];
}

export default function MemberTable({ members }: Props) {
  const columns = [
    { key: "id", label: "ID" },
    { key: "username", label: "Username" },
    { key: "isAdmin", label: "Role" },
    { key: "createdAt", label: "Tanggal Dibuat" },
    { key: "status", label: "Status" },
    { key: "action", label: "Aksi" },
  ];

  const rows = members.map((member, index) => ({
    key: member.id,
    id: `MEM${index + 1}`,
    username: member.username,
    isAdmin: member.isAdmin ? (
      <Chip color="primary">Admin</Chip>
    ) : (
      <Chip>Member</Chip>
    ),
    createdAt: formatDate(member.createdAt),
    status: member.deletedAt ? (
      <Chip color="danger">Nonaktif</Chip>
    ) : (
      <Chip color="success">Aktif</Chip>
    ),
    action: !member.deletedAt && !member.isAdmin && (
      <MemberDeleteButton memberId={member.id} />
    ),
  }));

  return (
    <Table aria-label="Tabel Anggota">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} emptyContent="Tidak ada data anggota">
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
