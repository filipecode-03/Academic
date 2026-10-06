"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/src/components/products/product-card";
import type { PublicProduct } from "@/src/types/storefront";

type ProductSort = "SECTION" | "FEATURED" | "RECENT" | "PRICE_ASC" | "PRICE_DESC" | "NAME";

export default function ProductListing({
  products,
  initialSort = "FEATURED",
  emptyMessage = "Nenhum produto encontrado.",
}: {
  products: PublicProduct[];
  initialSort?: ProductSort;
  emptyMessage?: string;
}) {
  const [sort, setSort] = useState<ProductSort>(initialSort);
  const sortedProducts = useMemo(() => {
    if (sort === "SECTION") return products;
    return [...products].sort((a, b) => {
      if (sort === "FEATURED") return Number(b.featured) - Number(a.featured) || Date.parse(b.createdAt) - Date.parse(a.createdAt);
      if (sort === "RECENT") return Date.parse(b.createdAt) - Date.parse(a.createdAt);
      if (sort === "PRICE_ASC") return Number(a.price) - Number(b.price);
      if (sort === "PRICE_DESC") return Number(b.price) - Number(a.price);
      return a.name.localeCompare(b.name, "pt-BR");
    });
  }, [products, sort]);

  return (
    <section className="space-y-5 sm:space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-white px-4 py-3 shadow-sm">
        <p className="text-sm text-neutral-600"><span className="font-semibold text-neutral-950">{products.length}</span> {products.length === 1 ? "produto" : "produtos"}</p>
        <label className="flex items-center gap-2 text-sm">
          <span className="whitespace-nowrap text-neutral-600">Ordenar por</span>
          <select className="max-w-[11rem] rounded-md border border-neutral-300 bg-white px-3 py-2 font-medium outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/15" value={sort} onChange={(event) => setSort(event.target.value as ProductSort)}>
            {initialSort === "SECTION" && <option value="SECTION">Ordem da seção</option>}
            <option value="FEATURED">Em destaque</option>
            <option value="RECENT">Mais recentes</option>
            <option value="PRICE_ASC">Menor preço</option>
            <option value="PRICE_DESC">Maior preço</option>
            <option value="NAME">Nome</option>
          </select>
        </label>
      </div>
      {products.length === 0 ? (
        <p className="rounded-xl border bg-white p-10 text-center text-neutral-600 shadow-sm">{emptyMessage}</p>
      ) : (
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5">
          {sortedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </section>
  );
}
