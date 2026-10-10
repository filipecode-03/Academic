import Link from "next/link";
import { searchCatalog } from "@/src/services/home.service";
import { serializePublicProduct } from "@/src/types/storefront";
import ProductListing from "@/src/components/products/product-listing";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q.trim() : "";
  const results = await searchCatalog(query);

  return <main className="mx-auto min-h-[50vh] max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
    <header><p className="text-sm text-neutral-500">Resultados da busca</p><h1 className="mt-1 text-2xl font-bold sm:text-3xl">{query ? `“${query}”` : "Buscar no catálogo"}</h1></header>
    {results.collections.length > 0 && <section><h2 className="mb-3 text-lg font-semibold">Coleções</h2><div className="flex flex-wrap gap-2">{results.collections.map((item) => <Link key={item.id} className="rounded-full border bg-white px-4 py-2 text-sm hover:bg-neutral-100" href={`/colecoes/${item.slug}`}>{item.name}</Link>)}</div></section>}
    {results.products.length > 0 ? <section><h2 className="mb-3 text-lg font-semibold">Produtos</h2><ProductListing products={results.products.map(serializePublicProduct)} /></section> : query.length >= 2 ? <p className="rounded-lg border bg-white p-5 text-neutral-600">Nenhum produto encontrado. Tente outro termo.</p> : <p className="rounded-lg border bg-white p-5 text-neutral-600">Digite pelo menos dois caracteres para buscar.</p>}
  </main>;
}
