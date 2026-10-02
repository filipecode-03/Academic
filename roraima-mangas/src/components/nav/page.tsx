"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import logo from "@/public/logo.jpg";
import { Button } from "@/src/components/ui/button";
import CartPanel from "@/src/components/cart/cart-panel";
import { useCart } from "@/src/components/cart/cart-context";

type CatalogLink = { id: string; name: string; slug: string };
type SearchProduct = CatalogLink & { status: string };
type ApiResponse = {
  categories?: CatalogLink[];
  collections?: CatalogLink[];
  products?: SearchProduct[];
  message?: string;
};

function CatalogMenus({
  categories,
  collections,
  onNavigate,
}: {
  categories: CatalogLink[];
  collections: CatalogLink[];
  onNavigate?: () => void;
}) {
  return <>
    <Link href="/" onClick={onNavigate} className="rounded-md px-3 py-2 text-sm font-medium transition hover:bg-neutral-100">Início</Link>
    {categories.length > 0 && <details className="group relative">
      <summary className="cursor-pointer list-none rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-100">Categorias <span aria-hidden="true">⌄</span></summary>
      <div className="absolute left-0 top-full z-30 mt-1 max-h-72 min-w-56 overflow-y-auto rounded-lg border bg-white p-2 shadow-lg">
        {categories.map((category) => <Link key={category.id} href={`/categorias/${category.slug}`} onClick={onNavigate} className="block rounded px-3 py-2 text-sm hover:bg-neutral-100">{category.name}</Link>)}
      </div>
    </details>}
    {collections.length > 0 && <details className="group relative">
      <summary className="cursor-pointer list-none rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-100">Coleções <span aria-hidden="true">⌄</span></summary>
      <div className="absolute left-0 top-full z-30 mt-1 max-h-72 min-w-56 overflow-y-auto rounded-lg border bg-white p-2 shadow-lg">
        {collections.map((collection) => <Link key={collection.id} href={`/colecoes/${collection.slug}`} onClick={onNavigate} className="block rounded px-3 py-2 text-sm hover:bg-neutral-100">{collection.name}</Link>)}
      </div>
    </details>}
  </>;
}

export default function Nav() {
  const router = useRouter();
  const { itemCount } = useCart();
  const [categories, setCategories] = useState<CatalogLink[]>([]);
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
    Promise.all([fetch("/api/categories"), fetch("/api/collections")])
      .then(async ([categoryResponse, collectionResponse]) => {
        if (!categoryResponse.ok || !collectionResponse.ok) return;
        const [categoryData, collectionData] = await Promise.all([
          categoryResponse.json() as Promise<ApiResponse>,
          collectionResponse.json() as Promise<ApiResponse>,
        ]);
        if (!cancelled) {
          setCategories(categoryData.categories ?? []);
          setCollections(collectionData.collections ?? []);
        }
      })
      .catch((cause: unknown) => console.error("Não foi possível carregar a navegação do catálogo:", cause));
    return () => { cancelled = true; };
  }, []);

  const loadProductCatalog = useCallback(() => {
    if (!catalogRequest.current) {
      catalogRequest.current = fetch("/api/products")
        .then(async (response) => {
          if (!response.ok) throw new Error("Não foi possível pesquisar produtos.");
          const data = await response.json() as ApiResponse;
          const available = (data.products ?? []).filter((product) => product.status !== "INACTIVE");
          setCatalog(available);
          return available;
        })
        .catch((cause: unknown) => {
          catalogRequest.current = null;
          throw cause;
        });
    }
    return catalogRequest.current;
  }, []);

  const normalizedQuery = query.trim().toLocaleLowerCase();
  const results = useMemo(() => {
    if (!normalizedQuery || !catalog) return [];
    return catalog.filter((product) => product.name.toLocaleLowerCase().includes(normalizedQuery)).slice(0, 6);
  }, [catalog, normalizedQuery]);

  useEffect(() => {
    if (normalizedQuery.length < 2 || catalog) return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      setSearching(true);
      setSearchError("");
      void loadProductCatalog()
        .catch((cause: unknown) => {
          console.error("Erro na busca do catálogo:", cause);
          if (!cancelled) setSearchError("Não foi possível carregar os resultados da busca.");
        })
        .finally(() => { if (!cancelled) setSearching(false); });
    }, 250);
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, [normalizedQuery, catalog, loadProductCatalog]);

  async function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (normalizedQuery.length < 2) return;
    try {
      setSearching(true);
      setSearchError("");
      const products = await loadProductCatalog();
      const match = products.find((product) => product.name.toLocaleLowerCase().includes(normalizedQuery));
      if (match) {
        setQuery("");
        router.push(`/produtos/${match.slug}`);
      }
      else setSearchError(`Nenhum produto encontrado para “${query.trim()}”.`);
    } catch (cause) {
      console.error("Erro ao pesquisar produtos:", cause);
      setSearchError("Não foi possível realizar a busca agora.");
    } finally {
      setSearching(false);
    }
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <details className="relative md:hidden" open={mobileOpen} onToggle={(event) => setMobileOpen(event.currentTarget.open)}>
              <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full hover:bg-neutral-100" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}>
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </summary>
              {mobileOpen && <div className="absolute left-0 top-full z-40 mt-3 flex min-w-64 flex-col gap-1 rounded-lg border bg-white p-3 shadow-xl">
                <CatalogMenus categories={categories} collections={collections} onNavigate={() => setMobileOpen(false)} />
              </div>}
            </details>
            <Link href="/" aria-label="Roraima Mangas, início" className="shrink-0">
              <Image src={logo} alt="Roraima Mangas" priority className="size-12 rounded-full object-cover sm:size-14" />
            </Link>
          </div>

          <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
            <CatalogMenus categories={categories} collections={collections} />
          </nav>

          <form onSubmit={(event) => void submitSearch(event)} role="search" className="order-3 relative flex w-full md:order-none md:w-auto md:flex-1 md:max-w-md">
            <input
              type="search"
              aria-label="Pesquisar produtos"
              aria-expanded={normalizedQuery.length >= 2}
              placeholder="Buscar no catálogo..."
              value={query}
              onChange={(event) => { setQuery(event.target.value); setSearchError(""); }}
              className="h-10 min-w-0 flex-1 rounded-l-md border border-r-0 border-neutral-300 bg-white px-3 text-sm outline-none transition focus:border-neutral-800 focus:ring-2 focus:ring-neutral-800/15"
            />
            <Button type="submit" aria-label="Buscar" disabled={normalizedQuery.length < 2 || searching} className="h-10 rounded-l-none rounded-r-md bg-neutral-900 px-3 text-white hover:bg-neutral-700">
              <Search className="size-4" />
            </Button>
            {normalizedQuery.length >= 2 && (results.length > 0 || searching || searchError || catalog) && <div className="absolute left-0 right-0 top-full z-40 mt-1 overflow-hidden rounded-lg border bg-white shadow-xl">
              {searching && <p className="px-4 py-3 text-sm text-neutral-500">Buscando produtos...</p>}
              {!searching && searchError && <p className="px-4 py-3 text-sm text-neutral-600">{searchError}</p>}
              {!searching && !searchError && results.length === 0 && <p className="px-4 py-3 text-sm text-neutral-600">Nenhum produto encontrado.</p>}
              {!searching && results.map((product) => <Link key={product.id} href={`/produtos/${product.slug}`} onClick={() => setQuery("")} className="block border-b px-4 py-3 text-sm last:border-0 hover:bg-neutral-50">{product.name}</Link>)}
            </div>}
          </form>

          <Button type="button" variant="outline" className="relative h-10 gap-2 px-3" onClick={() => setCartOpen(true)} aria-label={`Abrir sacola, ${itemCount} itens`}>
            <ShoppingBag className="size-5" /><span className="hidden sm:inline">Sacola</span>
            <span className="flex min-w-5 items-center justify-center rounded-full bg-yellow-300 px-1 text-xs font-bold text-black">{itemCount}</span>
          </Button>
        </div>
      </header>
      <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
