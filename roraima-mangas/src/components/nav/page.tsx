"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import logo from "@/public/logo.jpg";
import { Button } from "@/src/components/ui/button";
import CartPanel from "@/src/components/cart/cart-panel";
import { useCart } from "@/src/components/cart/cart-context";

type CatalogLink = { id: string; name: string; slug: string };
type SearchProduct = CatalogLink & { status: string };
type ApiResponse = { collections?: CatalogLink[]; products?: SearchProduct[] };

export default function Nav() {
  const router = useRouter();
  const { itemCount } = useCart();
  const [collections, setCollections] = useState<CatalogLink[]>([]);
  const [query, setQuery] = useState("");
  const [catalog, setCatalog] = useState<SearchProduct[] | null>(null);
  const [searchError, setSearchError] = useState("");
  const [searching, setSearching] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const catalogRequest = useRef<Promise<SearchProduct[]> | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/collections").then(async (response) => {
      if (!response.ok) throw new Error("Não foi possível carregar as coleções.");
      const data = await response.json() as ApiResponse;
      if (!cancelled) setCollections(data.collections ?? []);
    }).catch((cause: unknown) => console.error("Não foi possível carregar a navegação de coleções:", cause));
    return () => { cancelled = true; };
  }, []);

  const loadProductCatalog = useCallback(() => {
    if (!catalogRequest.current) catalogRequest.current = fetch("/api/products").then(async (response) => {
      if (!response.ok) throw new Error("Não foi possível pesquisar produtos.");
      const data = await response.json() as ApiResponse;
      const items = data.products ?? [];
      setCatalog(items);
      return items;
    }).catch((cause: unknown) => { catalogRequest.current = null; throw cause; });
    return catalogRequest.current;
  }, []);

  const normalizedQuery = query.trim().toLocaleLowerCase();
  const productResults = useMemo(() => catalog?.filter((product) => product.name.toLocaleLowerCase().includes(normalizedQuery)).slice(0, 6) ?? [], [catalog, normalizedQuery]);
  const collectionResults = useMemo(() => collections.filter((item) => item.name.toLocaleLowerCase().includes(normalizedQuery)).slice(0, 4), [collections, normalizedQuery]);

  useEffect(() => {
    if (normalizedQuery.length < 2 || catalog) return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      setSearching(true);
      void loadProductCatalog().catch((cause: unknown) => {
        console.error("Erro na busca do catálogo:", cause);
        if (!cancelled) setSearchError("Não foi possível carregar os resultados da busca.");
      }).finally(() => { if (!cancelled) setSearching(false); });
    }, 250);
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, [normalizedQuery, catalog, loadProductCatalog]);

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (normalizedQuery.length < 2) return;
    router.push(`/busca?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
  }

  const collectionLinks = collections.map((collection) => <Link key={collection.id} href={`/colecoes/${collection.slug}`} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-yellow-100 hover:text-neutral-950">{collection.name}</Link>);

  return <>
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center gap-3 px-4 py-2 sm:px-6 lg:flex-nowrap lg:px-8">
        <div className="flex flex-1 items-center gap-2 lg:flex-none">
          <Button type="button" variant="ghost" size="icon" className="md:hidden" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMobileOpen((open) => !open)}>{mobileOpen ? <X /> : <Menu />}</Button>
          <Link href="/" aria-label="Roraima Mangas, início" className="shrink-0"><Image src={logo} alt="Roraima Mangas" priority className="size-11 rounded-full object-cover" /></Link>
        </div>
        <form onSubmit={submitSearch} role="search" className="order-3 relative flex w-full lg:order-none lg:min-w-56 lg:flex-1 lg:max-w-2xl">
          <input type="search" aria-label="Pesquisar produtos e coleções" aria-expanded={normalizedQuery.length >= 2} placeholder="O que você está procurando?" value={query} onChange={(event) => { setQuery(event.target.value); setSearchError(""); }} className="h-10 min-w-0 flex-1 rounded-l-md border border-r-0 border-neutral-300 bg-white px-3 text-sm outline-none transition focus:border-neutral-800 focus:ring-2 focus:ring-neutral-800/15" />
          <Button type="submit" aria-label="Buscar" disabled={normalizedQuery.length < 2 || searching} className="h-10 rounded-l-none rounded-r-md bg-neutral-900 px-4 text-white hover:bg-neutral-700"><Search className="size-4" /></Button>
          {normalizedQuery.length >= 2 && (productResults.length > 0 || collectionResults.length > 0 || searching || searchError || catalog) && <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-96 overflow-y-auto rounded-lg border bg-white shadow-xl">
            {searching && <p className="px-4 py-3 text-sm text-neutral-500">Buscando…</p>}{searchError && <p role="alert" className="px-4 py-3 text-sm text-neutral-600">{searchError}</p>}
            {!searching && !searchError && productResults.length + collectionResults.length === 0 && <p className="px-4 py-3 text-sm text-neutral-600">Nenhum resultado encontrado.</p>}
            {productResults.length > 0 && <><p className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">Produtos</p>{productResults.map((product) => <Link key={product.id} href={`/produtos/${product.slug}`} onClick={() => setQuery("")} className="block border-b px-4 py-2 text-sm hover:bg-neutral-50">{product.name}</Link>)}</>}
            {collectionResults.length > 0 && <><p className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">Coleções</p>{collectionResults.map((collection) => <Link key={collection.id} href={`/colecoes/${collection.slug}`} onClick={() => setQuery("")} className="block border-b px-4 py-2 text-sm hover:bg-neutral-50">{collection.name}</Link>)}</>}
            {!searching && <Link href={`/busca?q=${encodeURIComponent(query.trim())}`} onClick={() => setQuery("")} className="block border-t bg-neutral-50 px-4 py-3 text-sm font-medium hover:bg-neutral-100">Ver todos os resultados</Link>}
          </div>}
        </form>
        <div className="flex shrink-0 items-center gap-1">
          <Link href="/admin/login" aria-label="Acesso do administrador" title="Acesso do administrador" className="hidden size-10 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 sm:flex"><UserRound className="size-5" /></Link>
          <Button type="button" variant="outline" className="relative h-10 gap-2 px-3" onClick={() => setCartOpen(true)} aria-label={`Abrir sacola, ${itemCount} itens`}><ShoppingBag className="size-5" /><span className="hidden sm:inline">Sacola</span><span className="flex min-w-5 items-center justify-center rounded-full bg-yellow-300 px-1 text-xs font-bold text-black">{itemCount}</span></Button>
        </div>
      </div>
      {collections.length > 0 && <nav aria-label="Coleções" className="hidden border-t border-neutral-100 md:block"><div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-1.5 sm:px-6 lg:px-8"><Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100">Início</Link>{collectionLinks}</div></nav>}
      {mobileOpen && <nav aria-label="Menu móvel" className="border-t bg-white px-4 py-2 md:hidden"><div className="mx-auto flex max-w-7xl flex-col">{<Link href="/" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-100">Início</Link>}{collectionLinks}<Link href="/admin/login" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-100"><UserRound className="size-4" />Acesso do administrador</Link></div></nav>}
    </header>
    <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
  </>;
}
