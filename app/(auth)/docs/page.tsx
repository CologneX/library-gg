import { title } from "@/components/primitives";
import { Image } from "@nextui-org/react";
export default function DocsPage() {
  return (
    <section className="flex items-center justify-center w-full h-full">
      <div className={title()}>Dokumentasi</div>
      <div className="text-md">
        Class Diagram Aplikasi
      </div>
      <Image/>
    </section>
  );
}
