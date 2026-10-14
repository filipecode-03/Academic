import Link from "next/link";

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Navegação estrutural" className="mb-6 text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-foreground hover:underline">
            Página Inicial
          </Link>
        </li>
        <li aria-hidden="true" className="text-border">
          /
        </li>
        <li aria-current="page" className="max-w-full truncate font-medium text-foreground">
          {current}
        </li>
      </ol>
    </nav>
  );
}
