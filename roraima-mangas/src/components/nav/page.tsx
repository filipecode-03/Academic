"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, Search, ShoppingBag, X } from "lucide-react";
import logo from "@/public/logo.jpg";
import { Button } from "@/src/components/ui/button";
import CartPanel from "@/src/components/cart/cart-panel";
import { useCart } from "@/src/components/cart/cart-context";
import ThemeToggle from "@/src/components/theme-toggle";

type CatalogLink = { id: string; name: string; slug: string };
type SearchProduct = CatalogLink & { status: string };
type SearchResponse = { collections?: CatalogLink[]; products?: SearchProduct[] };
type NavigationChild = { id: string; title: string; href: string; external: boolean };
type NavigationItem = {
  id: string;
  title: string;
  type: "LINK" | "DROPDOWN";
  href?: string;
  external?: boolean;
  children: NavigationChild[];
};

function isCurrentPath(pathname: string, href: string) {
  return (
    href.startsWith("/") && (pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)))
  );
}

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [items, setItems] = useState<NavigationItem[]>([]);
  const [collections, setCollections] = useState<CatalogLink[]>([]);
  const [query, setQuery] = useState("");
  const [catalog, setCatalog] = useState<SearchProduct[] | null>(null);
  const [searchError, setSearchError] = useState("");
  const [searching, setSearching] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpenId, setDesktopOpenId] = useState<string | null>(null);
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null);
  const catalogRequest = useRef<Promise<SearchProduct[]> | null>(null);

  useEffect(() => {
    let cancelled = false;
    void Promise.all([
      fetch("/api/navigation", { cache: "no-store" }).then(async (response) => {
        if (!response.ok) throw new Error("Não foi possível carregar a navegação.");
        const data = (await response.json()) as { items?: NavigationItem[] };
        if (!cancelled) setItems(data.items ?? []);
      }),
      fetch("/api/collections").then(async (response) => {
        if (!response.ok) throw new Error("Não foi possível carregar as coleções.");
        const data = (await response.json()) as SearchResponse;
        if (!cancelled) setCollections(data.collections ?? []);
      }),
    ]).catch((cause: unknown) =>
      console.error("Não foi possível carregar a navegação da loja:", cause),
    );
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDesktopOpenId(null);
        setMobileOpenId(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const loadProductCatalog = useCallback(() => {
    if (!catalogRequest.current)
      catalogRequest.current = fetch("/api/products")
        .then(async (response) => {
          if (!response.ok) throw new Error("Não foi possível pesquisar produtos.");
          const data = (await response.json()) as SearchResponse;
          const products = data.products ?? [];
          setCatalog(products);
          return products;
        })
        .catch((cause: unknown) => {
          catalogRequest.current = null;
          throw cause;
        });
    return catalogRequest.current;
  }, []);

  const normalizedQuery = query.trim().toLocaleLowerCase();
  const productResults = useMemo(
    () =>
      catalog
        ?.filter((product) => product.name.toLocaleLowerCase().includes(normalizedQuery))
        .slice(0, 6) ?? [],
    [catalog, normalizedQuery],
  );
  const collectionResults = useMemo(
    () =>
      collections
        .filter((item) => item.name.toLocaleLowerCase().includes(normalizedQuery))
        .slice(0, 4),
    [collections, normalizedQuery],
  );

  useEffect(() => {
    if (normalizedQuery.length < 2 || catalog) return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      setSearching(true);
      void loadProductCatalog()
        .catch((cause: unknown) => {
          console.error("Erro na busca do catálogo:", cause);
          if (!cancelled) setSearchError("Não foi possível carregar os resultados da busca.");
        })
        .finally(() => {
          if (!cancelled) setSearching(false);
        });
    }, 250);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [normalizedQuery, catalog, loadProductCatalog]);

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (normalizedQuery.length < 2) return;
    router.push(`/busca?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
  }

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileOpenId(null);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 shadow-[0_2px_14px_rgb(13_13_13/0.05)] backdrop-blur-xl">
        <div className="mx-auto flex min-h-[4.5rem] max-w-7xl flex-wrap items-center gap-2 px-3 py-2 sm:gap-3 sm:px-6 md:flex-nowrap md:py-0 lg:gap-7 lg:px-8">
          <div className="flex shrink-0 items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              onClick={() => {
                setMobileOpen((open) => !open);
                setMobileOpenId(null);
              }}
            >
              {mobileOpen ? <X /> : <Menu />}
            </Button>
            <Link
              href="/"
              aria-label="Roraima Mangas, início"
              className="group flex shrink-0 items-center gap-2.5"
            >
              <Image
                src={logo}
                alt="Roraima Mangas"
                priority
                className="size-10 rounded-full object-cover ring-1 ring-neutral-200 transition duration-200 group-hover:ring-brand-secondary sm:size-11"
              />
              <span className="hidden text-sm leading-tight font-bold tracking-tight text-foreground sm:block">
                RORAIMA
                <br />
                <span className="text-[0.65rem] font-medium tracking-[0.22em] text-muted-foreground">
                  MANGÁS
                </span>
              </span>
            </Link>
          </div>

          <form
            onSubmit={submitSearch}
            role="search"
            className="relative order-3 flex min-w-0 basis-full md:order-none md:flex-1 md:basis-auto lg:mx-auto lg:max-w-2xl"
          >
            <input
              type="search"
              name="catalog-search"
              autoComplete="off"
              spellCheck={false}
              aria-label="Pesquisar produtos e coleções"
              placeholder="Busque produtos e coleções"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setSearchError("");
              }}
              className="h-10 min-w-0 flex-1 rounded-l-full border border-border bg-muted/55 px-4 text-sm text-foreground transition-colors duration-200 outline-none placeholder:text-muted-foreground focus:border-brand-accent focus:bg-background focus:ring-2 focus:ring-brand/30 sm:h-11 sm:px-5"
            />
            <Button
              type="submit"
              aria-label="Buscar"
              disabled={normalizedQuery.length < 2 || searching}
              className="h-10 rounded-l-none rounded-r-full bg-brand-ink px-4 text-white hover:bg-brand-deep sm:h-11 sm:px-5"
            >
              <Search className="size-4" />
            </Button>
            {normalizedQuery.length >= 2 &&
              (productResults.length > 0 ||
                collectionResults.length > 0 ||
                searching ||
                searchError ||
                catalog) && (
                <div className="absolute top-full right-0 left-0 z-50 mt-2 max-h-96 overflow-y-auto rounded-2xl border border-border bg-popover p-1.5 text-popover-foreground shadow-xl">
                  {searching && (
                    <p className="px-4 py-3 text-sm text-muted-foreground">Buscando…</p>
                  )}
                  {searchError && (
                    <p role="alert" className="px-4 py-3 text-sm text-muted-foreground">
                      {searchError}
                    </p>
                  )}
                  {!searching &&
                    !searchError &&
                    productResults.length + collectionResults.length === 0 && (
                      <p className="px-4 py-3 text-sm text-muted-foreground">
                        Nenhum resultado encontrado.
                      </p>
                    )}
                  {productResults.length > 0 && (
                    <>
                      <p className="px-3 pt-2 pb-1 text-[0.65rem] font-bold tracking-[0.16em] text-neutral-400 uppercase">
                        Produtos
                      </p>
                      {productResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/produtos/${product.slug}`}
                          onClick={() => setQuery("")}
                          className="block rounded-lg px-3 py-2.5 text-sm transition hover:bg-neutral-50"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </>
                  )}
                  {collectionResults.length > 0 && (
                    <>
                      <p className="px-3 pt-2 pb-1 text-[0.65rem] font-bold tracking-[0.16em] text-neutral-400 uppercase">
                        Coleções
                      </p>
                      {collectionResults.map((collection) => (
                        <Link
                          key={collection.id}
                          href={`/colecoes/${collection.slug}`}
                          onClick={() => setQuery("")}
                          className="block rounded-lg px-3 py-2.5 text-sm transition hover:bg-neutral-50"
                        >
                          {collection.name}
                        </Link>
                      ))}
                    </>
                  )}
                  {!searching && (
                    <Link
                      href={`/busca?q=${encodeURIComponent(query.trim())}`}
                      onClick={() => setQuery("")}
                      className="mt-1 block rounded-lg border-t border-border px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      Ver todos os resultados
                    </Link>
                  )}
                </div>
              )}
          </form>

          <ThemeToggle className="shrink-0" />

          <Button
            type="button"
            variant="ghost"
            className="relative h-10 shrink-0 cursor-pointer gap-2 rounded-full px-3 sm:h-11 sm:px-4"
            onClick={() => setCartOpen(true)}
            aria-label={`Abrir sacola, ${itemCount} itens`}
          >
            <ShoppingBag className="size-5" />
            <span className="hidden text-sm font-semibold sm:inline">Sacola</span>
            <span className="flex min-w-5 items-center justify-center rounded-full bg-brand px-1.5 text-xs font-bold text-brand-deep">
              {itemCount}
            </span>
          </Button>
        </div>

        <nav
          aria-label="Navegação principal"
          className="hidden border-t border-neutral-100 md:block"
        >
          <div className="mx-auto flex max-w-7xl items-center gap-1 px-6 py-1.5 lg:px-8">
            {items.map((item) => {
              if (item.type === "LINK" && item.href) {
                const active = isCurrentPath(pathname, item.href);
                const className = `store-nav-link ${active ? "is-active" : ""}`;
                return item.external ? (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={className}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.title}
                  </Link>
                );
              }
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setDesktopOpenId(item.id)}
                  onMouseLeave={() => setDesktopOpenId((open) => (open === item.id ? null : open))}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null))
                      setDesktopOpenId(null);
                  }}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={desktopOpenId === item.id}
                    onClick={() => setDesktopOpenId((open) => (open === item.id ? null : item.id))}
                    className={`store-nav-link flex items-center gap-1.5 ${desktopOpenId === item.id ? "is-active" : ""}`}
                  >
                    {item.title}
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-4 transition-transform duration-150 ${desktopOpenId === item.id ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`absolute top-full left-0 z-50 min-w-56 origin-top-left pt-2 transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none ${desktopOpenId === item.id ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-1 scale-[0.985] opacity-0"}`}
                  >
                    <div className="max-h-[70vh] overflow-y-auto rounded-xl border border-brand-secondary/25 bg-popover p-1.5 text-popover-foreground shadow-[0_14px_35px_rgb(13_13_13/0.14)]">
                      {item.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.id}
                            href={child.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block rounded-lg px-3.5 py-2.5 text-sm text-foreground transition duration-150 hover:translate-x-0.5 hover:bg-brand/15 hover:text-brand-deep focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:outline-none dark:hover:text-brand"
                          >
                            {child.title}
                          </a>
                        ) : (
                          <Link
                            key={child.id}
                            href={child.href}
                            onClick={() => setDesktopOpenId(null)}
                            className="block rounded-lg px-3.5 py-2.5 text-sm text-foreground transition duration-150 hover:translate-x-0.5 hover:bg-brand/15 hover:text-brand-deep focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:outline-none dark:hover:text-brand"
                          >
                            {child.title}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>

        <nav
          aria-label="Menu móvel"
          aria-hidden={!mobileOpen}
          inert={!mobileOpen}
          className={`overflow-hidden border-t border-border bg-popover text-popover-foreground shadow-lg transition-[max-height,opacity] duration-200 motion-reduce:transition-none md:hidden ${mobileOpen ? "max-h-[75vh] opacity-100" : "max-h-0 border-transparent opacity-0"}`}
        >
          <div className="max-h-[75vh] overflow-y-auto px-3 py-3">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {items.map((item) =>
                item.type === "DROPDOWN" ? (
                  <div key={item.id} className="rounded-xl">
                    <button
                      type="button"
                      aria-expanded={mobileOpenId === item.id}
                      onClick={() => setMobileOpenId((open) => (open === item.id ? null : item.id))}
                      className={`flex min-h-12 w-full items-center justify-between rounded-xl border-l-2 px-4 text-left text-sm font-semibold transition-colors ${mobileOpenId === item.id ? "border-brand-accent bg-brand/15 text-brand-deep dark:text-brand" : "border-transparent text-foreground hover:bg-muted"}`}
                    >
                      {item.title}
                      <ChevronRight
                        aria-hidden="true"
                        className={`size-4 transition-transform duration-150 ${mobileOpenId === item.id ? "rotate-90" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-200 motion-reduce:transition-none ${mobileOpenId === item.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="mb-1 ml-4 flex flex-col border-l border-brand-secondary/35 pl-3">
                          {item.children.map((child) =>
                            child.external ? (
                              <a
                                key={child.id}
                                href={child.href}
                                target="_blank"
                                rel="noreferrer"
                                onClick={closeMobileMenu}
                                className="flex min-h-11 items-center rounded-lg px-3 text-sm text-muted-foreground transition-colors hover:bg-brand/10 hover:text-brand-deep active:bg-brand/20 dark:hover:text-brand"
                              >
                                {child.title}
                              </a>
                            ) : (
                              <Link
                                key={child.id}
                                href={child.href}
                                onClick={closeMobileMenu}
                                className="flex min-h-11 items-center rounded-lg px-3 text-sm text-muted-foreground transition-colors hover:bg-brand/10 hover:text-brand-deep active:bg-brand/20 dark:hover:text-brand"
                              >
                                {child.title}
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  item.href &&
                  (item.external ? (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMobileMenu}
                      className="flex min-h-12 items-center rounded-xl border-l-2 border-transparent px-4 text-sm font-semibold text-foreground transition-colors hover:bg-brand/10 active:bg-brand/20"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`flex min-h-12 items-center rounded-xl border-l-2 px-4 text-sm font-semibold transition-colors active:bg-brand/20 ${isCurrentPath(pathname, item.href) ? "border-brand-accent bg-brand/15 text-brand-deep dark:text-brand" : "border-transparent text-foreground hover:bg-brand/10"}`}
                    >
                      {item.title}
                    </Link>
                  ))
                ),
              )}
            </div>
          </div>
        </nav>
      </header>
      <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
