import Link from "next/link";

export default function StorefrontNotFound() {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-7xl flex-col items-center justify-center gap-4 px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">404</p>
      <h1 className="text-3xl font-bold">Não encontramos esta página</h1>
      <p className="max-w-md text-neutral-600">O conteúdo pode ter sido removido ou o endereço não está correto.</p>
      <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 text-sm font-semibold text-white transition hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2">Voltar para a página inicial</Link>
    </main>
  );
}
