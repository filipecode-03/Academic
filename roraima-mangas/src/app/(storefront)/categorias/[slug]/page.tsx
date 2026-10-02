import { notFound } from "next/navigation";
import Breadcrumb from "@/src/components/products/breadcrumb";
import ProductListing from "@/src/components/products/product-listing";
import { getPublicCategoryBySlug } from "@/src/services/home.service";
import { serializePublicProduct } from "@/src/types/storefront";

export default async function CategoryPage({ params }: PageProps<"/categorias/[slug]">) {
  const { slug } = await params;
  const category = await getPublicCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <main className="mx-auto min-h-[50vh] max-w-7xl space-y-5 px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb current={category.name} />
      <h1 className="text-2xl font-bold sm:text-3xl">{category.name}</h1>
      <ProductListing products={category.products.map(serializePublicProduct)} />
    </main>
  );
}
