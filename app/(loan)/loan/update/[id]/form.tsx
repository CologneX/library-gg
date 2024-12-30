"use client";
import { Collection, Loan, LoanItem, Member } from "@prisma/client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Select,
  SelectItem,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Chip,
  Alert,
} from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2Icon } from "lucide-react";

import { formatDate } from "@/lib/date";
import { ApiError } from "@/types/api";

type LoanWithRelations = Loan & {
  member: Member;
  loanItems: (LoanItem & {
    collection: Collection;
  })[];
};

interface Props {
  loan: LoanWithRelations;
  collections: Pick<
    Collection,
    "id" | "title" | "author" | "publisher" | "isbn" | "availableCopies"
  >[];
}

interface SelectedCollection
  extends Pick<Collection, "id" | "title" | "author" | "publisher" | "isbn"> {
  key: string;
}

export default function UpdateLoanForm({ loan, collections }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ApiError[]>([]);
  const [message, setMessage] = useState("");
  const [selectedCollections, setSelectedCollections] = useState<
    SelectedCollection[]
  >(
    loan.loanItems.map((item) => ({
      key: item.collection.id,
      id: item.collection.id,
      title: item.collection.title,
      author: item.collection.author || "",
      publisher: item.collection.publisher || "",
      isbn: item.collection.isbn || "",
    })),
  );

  const getFieldError = (fieldName: string) => {
    return errors.find((error) => error.field === fieldName)?.message;
  };

  const availableCollections = collections.filter(
    (c) => !selectedCollections.find((sc) => sc.id === c.id),
  );

  const handleAddCollection = (keys: any) => {
    const collectionId = Array.from(keys)[0];
    const collection = collections.find((c) => c.id === collectionId);

    if (collection) {
      setSelectedCollections([
        ...selectedCollections,
        {
          key: collection.id,
          id: collection.id,
          title: collection.title,
          author: collection.author || "",
          publisher: collection.publisher || "",
          isbn: collection.isbn || "",
        },
      ]);
    }
  };

  const handleRemoveCollection = (collectionId: string) => {
    setSelectedCollections(
      selectedCollections.filter((c) => c.id !== collectionId),
    );
  };

  const getLoanStatus = (status: string) => {
    switch (status) {
      case "ongoing":
        return { label: "Dipinjam", color: "warning" };
      case "returned":
        return { label: "Dikembalikan", color: "success" };
      case "overdue":
        return { label: "Terlambat", color: "danger" };
      default:
        return { label: status, color: "default" };
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setErrors([]);
    setMessage("");

    // Validate at least one collection
    if (selectedCollections.length === 0) {
      setErrors([
        { field: "collectionIds", message: "Minimal harus meminjam 1 koleksi" },
      ]);
      setMessage("Data tidak valid");
      setIsLoading(false);

      return;
    }
    const data = {
      collectionIds: selectedCollections.map((c) => c.id),
    };

    try {
      const response = await fetch(`/api/loan?id=${loan.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collectionIds: selectedCollections.map((c) => c.id),
        }),
      });

      console.log(data);

      const result = await response.json();

      if (!response.ok) {
        setErrors(result.errors || []);
        setMessage(result.message);

        return;
      }

      router.push("/loan");
      router.refresh();
    } catch (error) {
      setMessage("Terjadi kesalahan sistem");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-xl mx-auto w-full">
      <CardHeader>
        <h1 className="text-2xl font-bold">Update Peminjaman</h1>
      </CardHeader>

      <CardBody className="flex flex-col gap-4">
        {message && (
          <Alert
            color={errors.length > 0 ? "warning" : "success"}
            description={message}
            title={errors.length > 0 ? "Gagal" : "Berhasil"}
          />
        )}
        <div className="grid grid-cols-2 gap-4 w-full">
          <div>
            <p className="text-small text-default-500">Peminjam</p>
            <p>{loan.member.username}</p>
          </div>
          <div>
            <p className="text-small text-default-500">Status</p>
            <Chip color={getLoanStatus(loan.status).color as any}>
              {getLoanStatus(loan.status).label}
            </Chip>
          </div>
          <div>
            <p className="text-small text-default-500">Tanggal Pinjam</p>
            <p>{formatDate(loan.loanDate)}</p>
          </div>
          <div>
            <p className="text-small text-default-500">Tanggal Kembali</p>
            <p>{formatDate(loan.returnDueDate)}</p>
          </div>
          {loan.returnDate && (
            <div>
              <p className="text-small text-default-500">
                Tanggal Dikembalikan
              </p>
              <p>{formatDate(loan.returnDate)}</p>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Select
            errorMessage={getFieldError("collectionIds")}
            isInvalid={!!getFieldError("collectionIds")}
            label="Tambah Koleksi"
            onSelectionChange={(keys) => handleAddCollection(new Set(keys))}
          >
            {availableCollections.map((collection) => (
              <SelectItem
                key={collection.id}
                textValue={collection.title}
                value={collection.id}
              >
                {collection.title}{" "}
                <span className="text-sm text-default-500">
                  ({collection.availableCopies} tersedia)
                </span>
              </SelectItem>
            ))}
          </Select>

          <Table aria-label="Koleksi yang dipinjam">
            <TableHeader>
              <TableColumn>Judul</TableColumn>
              <TableColumn>Penulis</TableColumn>
              <TableColumn>Penerbit</TableColumn>
              <TableColumn>ISBN</TableColumn>
              <TableColumn>Aksi</TableColumn>
            </TableHeader>
            <TableBody emptyContent="Belum ada koleksi dipinjam">
              {selectedCollections.map((collection) => (
                <TableRow key={collection.key}>
                  <TableCell>{collection.title}</TableCell>
                  <TableCell>{collection.author}</TableCell>
                  <TableCell>{collection.publisher}</TableCell>
                  <TableCell>{collection.isbn}</TableCell>
                  <TableCell>
                    <Button
                      isIconOnly
                      color="danger"
                      size="sm"
                      onPress={() => handleRemoveCollection(collection.id)}
                    >
                      <Trash2Icon className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardBody>

      <CardFooter>
        <Button
          fullWidth
          color="primary"
          isDisabled={selectedCollections.length === 0}
          isLoading={isLoading}
          onPress={handleSubmit}
        >
          Simpan Perubahan
        </Button>
      </CardFooter>
    </Card>
  );
}
