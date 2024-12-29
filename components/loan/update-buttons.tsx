import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function LoanUpdateButton({ loanId }: { loanId: string }) {
  return (
    <Link href={`/loan/update/${loanId}`} className="grow">
      <Button fullWidth size="sm">
        Ubah
      </Button>
    </Link>
  );
}
