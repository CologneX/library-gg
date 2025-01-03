"use client";
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
  DatePicker,
  Alert,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { parseDate } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";
import { Trash2Icon } from "lucide-react";

import { ApiError } from "@/types/api";
import { Collection, Member } from "@/prisma/generated/client";

interface Props {
  members: Pick<Member, "id" | "username">[];
  collections: Pick<
    Collection,
    "id" | "title" | "author" | "publisher" | "isbn" | "availableCopies"
  >[];
}

interface SelectedCollection
  extends Pick<Collection, "id" | "title" | "author" | "publisher" | "isbn"> {
  key: string;
}

export default function CreateLoanForm({ members, collections }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ApiError[]>([]);
  const [message, setMessage] = useState("");
  const [selectedMember, setSelectedMember] = useState<Set<string>>(
    new Set([]),
  );
  const [loanDate, setLoanDate] = useState<Date>(new Date());
  const [returnDueDate, setReturnDueDate] = useState<Date>(
    new Date(loanDate.getTime() + 7 * 24 * 60 * 60 * 1000),
  );
  const [selectedCollections, setSelectedCollections] = useState<
    SelectedCollection[]
  >([]);

  const getFieldError = (fieldName: string) => {
    return errors.find((error) => error.field === fieldName)?.message;
  };

  const availableCollections = collections.filter(
    (c) => !selectedCollections.find((sc) => sc.id === c.id),
  );

  useEffect(() => {
    setReturnDueDate(new Date(loanDate.getTime() + 7 * 24 * 60 * 60 * 1000));
  }, [loanDate]);
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

  const handleSubmit = async () => {
    setIsLoading(true);
    setErrors([]);
    setMessage("");

    const memberId = Array.from(selectedMember)[0];
    const data = {
      memberId,
      collectionIds: selectedCollections.map((c) => c.id),
      loanDate,
      returnDueDate,
    };

    try {
      const response = await fetch("/api/loan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

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
        <h1 className="text-2xl font-bold">Buat Peminjaman Baru</h1>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        {message && (
          <Alert
            color={errors.length > 0 ? "warning" : "success"}
            description={message}
            title={errors.length > 0 ? "Gagal" : "Berhasil"}
          />
        )}

        <Select
          isVirtualized
          errorMessage={getFieldError("memberId")}
          isInvalid={!!getFieldError("memberId")}
          label="Pilih Anggota"
          selectedKeys={selectedMember}
          onSelectionChange={(keys) => setSelectedMember(keys as Set<string>)}
        >
          {members.map((member) => (
            <SelectItem key={member.id} value={member.id}>
              {member.username}
            </SelectItem>
          ))}
        </Select>

        <div className="grid grid-cols-2 gap-4">
          <I18nProvider locale="id-ID">
            <DatePicker
              errorMessage={getFieldError("loanDate")}
              isInvalid={!!getFieldError("loanDate")}
              label="Tanggal Pinjam"
              value={parseDate(loanDate.toISOString().split("T")[0])}
              onChange={(e) => e && setLoanDate(new Date(e.toString()))}
            />
            <DatePicker
              errorMessage={getFieldError("returnDueDate")}
              isInvalid={!!getFieldError("returnDueDate")}
              label="Tanggal Kembali"
              value={parseDate(returnDueDate.toISOString().split("T")[0])}
              onChange={(e) => e && setReturnDueDate(new Date(e.toString()))}
            />
          </I18nProvider>
        </div>

        <div className="space-y-2">
          <Select
            isVirtualized
            errorMessage={getFieldError("collectionIds")}
            isInvalid={!!getFieldError("collectionIds")}
            label="Tambah Koleksi"
            selectedKeys={selectedCollections.map(
              (collection) => collection.key,
            )}
            onSelectionChange={(keys) => handleAddCollection(keys)}
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
          {/* <ScrollShadow className="w-full" orientation="horizontal"> */}
          <Table aria-label="Koleksi yang dipilih">
            <TableHeader>
              <TableColumn>Judul</TableColumn>
              <TableColumn>Penulis</TableColumn>
              <TableColumn>Penerbit</TableColumn>
              <TableColumn>ISBN</TableColumn>
              <TableColumn>Aksi</TableColumn>
            </TableHeader>
            <TableBody emptyContent="Belum ada koleksi dipilih">
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
          {/* </ScrollShadow> */}
        </div>
      </CardBody>

      <CardFooter>
        <Button
          fullWidth
          color="primary"
          isDisabled={
            selectedMember.size === 0 || selectedCollections.length === 0
          }
          isLoading={isLoading}
          onPress={handleSubmit}
        >
          Buat Peminjaman
        </Button>
      </CardFooter>
    </Card>
  );
}
