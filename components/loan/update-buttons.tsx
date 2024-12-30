import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function LoanUpdateButton({ loanId }: { loanId: string }) {
  return (
    <Link className="grow" href={`/loan/update/${loanId}`}>
      <Button fullWidth size="sm">
        Ubah
      </Button>
    </Link>
  );
}
