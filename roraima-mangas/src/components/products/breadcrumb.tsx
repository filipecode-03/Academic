import Link from "next/link";

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-sm text-neutral-600">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:underline">Página Inicial</Link></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-neutral-900">{current}</li>
      </ol>
    </nav>
  );
}
