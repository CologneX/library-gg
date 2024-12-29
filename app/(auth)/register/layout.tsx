export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center w-full h-full">
      {children}
    </section>
  );
}
