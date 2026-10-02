import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/src/components/products/breadcrumb";
import ProductListing from "@/src/components/products/product-listing";
import { getPublicHomeSectionById } from "@/src/services/home.service";
import { serializePublicProduct } from "@/src/types/storefront";

export async function generateMetadata({ params }: PageProps<"/secoes/[id]">): Promise<Metadata> {
  const { id } = await params;
  const section = await getPublicHomeSectionById(id);
  return { title: section ? `${section.title} | Roraima Mangas` : "Seção | Roraima Mangas" };
}

export default async function HomeSectionPage({ params }: PageProps<"/secoes/[id]">) {
  const { id } = await params;
  const section = await getPublicHomeSectionById(id);
  if (!section) notFound();

  const products = section.displayProducts.map(serializePublicProduct);
  return (
    <main className="mx-auto min-h-[50vh] max-w-7xl space-y-5 px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb current={section.title} />
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">{section.title}</h1>
      <ProductListing products={products} initialSort={section.type === "MANUAL" ? "SECTION" : "FEATURED"} />
    </main>
  );
}
