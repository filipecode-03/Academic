import ProductListing from "@/src/components/products/product-listing";
import { getPublicProductsForListing } from "@/src/services/home.service";

export default async function ProductCatalogPage({ title, kind }: { title: string; kind: "ALL" | "NEW" | "FEATURED" }) {
  const products = await getPublicProductsForListing(kind);
  return <main className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
    <header className="border-b border-neutral-200 pb-4"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Roraima Mangas</p><h1 className="mt-2 text-3xl font-bold tracking-tight">{title}</h1></header>
    <ProductListing products={products} initialSort={kind === "NEW" ? "RECENT" : "FEATURED"} />
  </main>;
}
