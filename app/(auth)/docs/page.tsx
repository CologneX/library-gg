import { Image } from "@nextui-org/react";

import { title } from "@/components/primitives";
export default function DocsPage() {
  return (
    <section className="flex items-center justify-center w-full h-full">
      <div className={title()}>Dokumentasi</div>
      <div className="text-md">Class Diagram Aplikasi</div>
      <Image />
    </section>
  );
}
