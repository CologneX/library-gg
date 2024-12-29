// "use client";
// import { title } from "@/components/primitives";
// import {
//   Alert,
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader,
//   Form,
//   Input,
// } from "@nextui-org/react";
// import { Collection, Loan, LoanItem } from "@prisma/client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { ApiError } from "@/types/api";

// export default function UpdateLoanForm({
//   loan,
//   loanItems,
// }: {
//   loan: Loan;
//   loanItems: {
//     collection: Collection[];
//     loan: LoanItem[];
//   };
// }) {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState<ApiError[]>([]);
//   const [message, setMessage] = useState("");

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setIsLoading(true);
//     setErrors([]);
//     setMessage("");

//     const formData = new FormData(event.currentTarget);
//     const data = {
//       title: formData.get("title") as string,
//       author: formData.get("author") as string,
//       publisher: formData.get("publisher") as string,
//       yearPublished: parseInt(formData.get("yearPublished") as string),
//       isbn: formData.get("isbn") as string,
//       totalCopies: parseInt(formData.get("totalCopies") as string),
//       availableCopies: parseInt(formData.get("availableCopies") as string),
//     };

//     try {
//       const response = await fetch(`/api/loan?id=${loan.id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       if (!response.ok) {
//         setErrors(result.errors || []);
//         setMessage(result.message);
//         setIsLoading(false);
//         return;
//       }

//       setMessage(result.message);
//       router.push("/");
//     } catch (error) {
//       setMessage("Terjadi kesalahan sistem");
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   const getFieldError = (fieldName: string) => {
//     return errors.find((error) => error.field === fieldName)?.message;
//   };

//   return (
//     <Card className="flex flex-col mx-auto max-w-md">
//       <CardHeader className={title()}>Ubah Koleksi</CardHeader>
//       <Form onSubmit={handleSubmit}>
//         <CardBody className="space-y-3">
//           {message && (
//             <Alert
//               color={errors.length > 0 ? "warning" : "success"}
//               title={errors.length > 0 ? "Gagal" : "Berhasil"}
//               description={message}
//             />
//           )}

//           {/* <Input
//             name="title"
//             isRequired
//             label="Judul"
//             defaultValue={collection.title}
//             isInvalid={!!getFieldError("title")}
//             errorMessage={getFieldError("title")}
//           />

//           <Input
//             name="author"
//             label="Penulis"
//             defaultValue={collection.author || ""}
//             isInvalid={!!getFieldError("author")}
//             errorMessage={getFieldError("author")}
//           />

//           <Input
//             name="publisher"
//             label="Penerbit"
//             defaultValue={collection.publisher || ""}
//             isInvalid={!!getFieldError("publisher")}
//             errorMessage={getFieldError("publisher")}
//           />

//           <Input
//             name="isbn"
//             label="ISBN"
//             defaultValue={collection.isbn || ""}
//             isInvalid={!!getFieldError("isbn")}
//             errorMessage={getFieldError("isbn")}
//           />

//           <Input
//             type="number"
//             name="yearPublished"
//             label="Tahun Terbit"
//             defaultValue={collection.yearPublished?.toString()}
//             isInvalid={!!getFieldError("yearPublished")}
//             errorMessage={getFieldError("yearPublished")}
//           />

//           <Input
//             name="totalCopies"
//             type="number"
//             min={1}
//             label="Total Copy"
//             defaultValue={collection.totalCopies.toString()}
//             isInvalid={!!getFieldError("totalCopies")}
//             errorMessage={getFieldError("totalCopies")}
//           />

//           <Input
//             name="availableCopies"
//             type="number"
//             label="Copy Tersedia"
//             min={0}
//             defaultValue={collection.availableCopies.toString()}
//             isInvalid={!!getFieldError("availableCopies")}
//             errorMessage={getFieldError("availableCopies")}
//           /> */}
//           <
//         </CardBody>

//         <CardFooter>
//           <Button
//             type="submit"
//             fullWidth
//             className="mt-auto"
//             isLoading={isLoading}
//             isDisabled={isLoading}
//           >
//             Simpan
//           </Button>
//         </CardFooter>
//       </Form>
//     </Card>
//   );
// }

"use client";
import { title } from "@/components/primitives";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";
import { Collection, Loan, LoanItem, Member } from "@prisma/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ApiError } from "@/types/api";
import { formatDate } from "@/lib/date";
import LoanItemsTable from "@/components/loan-items/table";

export type LoanWithRelations = Loan & {
  member: Member;
  loanItems: (LoanItem & {
    collection: Collection;
  })[];
};

export default function UpdateLoanForm({ loan }: { loan: LoanWithRelations }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ApiError[]>([]);
  const [message, setMessage] = useState("");

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

  return (
    <div className="flex flex-col gap-4 mx-auto max-w-4xl">
      {message && (
        <Alert
          color={errors.length > 0 ? "warning" : "success"}
          title={errors.length > 0 ? "Gagal" : "Berhasil"}
          description={message}
        />
      )}

      <Card>
        <CardHeader className={title()}>Detail Peminjaman</CardHeader>
        <Divider />
        <CardBody className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm text-gray-500">ID Peminjaman</h3>
            <p>{loan.id}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Status</h3>
            <Chip color={getLoanStatus(loan.status).color as any}>
              {getLoanStatus(loan.status).label}
            </Chip>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Tanggal Pinjam</h3>
            <p>{formatDate(loan.loanDate)}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Batas Pengembalian</h3>
            <p>{formatDate(loan.returnDueDate)}</p>
          </div>
          {loan.returnDate && (
            <div>
              <h3 className="text-sm text-gray-500">Tanggal Dikembalikan</h3>
              <p>{formatDate(loan.returnDate)}</p>
            </div>
          )}
        </CardBody>
      </Card>

      <Card>
        <CardHeader className={title()}>Detail Peminjam</CardHeader>
        <Divider />
        <CardBody>
          <div>
            <h3 className="text-sm text-gray-500">Username</h3>
            <p>{loan.member.username}</p>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader className={title()}>Daftar Koleksi</CardHeader>
        <Divider />
        <CardBody>
          <LoanItemsTable items={loan.loanItems} />
        </CardBody>
      </Card>
    </div>
  );
}
