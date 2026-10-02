import Link from "next/link";

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="transition-colors hover:text-neutral-950 hover:underline">Página Inicial</Link></li>
        <li aria-hidden="true" className="text-neutral-300">/</li>
        <li aria-current="page" className="max-w-full truncate font-medium text-neutral-800">{current}</li>
      </ol>
    </nav>
  );
}
