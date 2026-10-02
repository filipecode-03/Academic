import { notFound } from "next/navigation";
import Breadcrumb from "@/src/components/products/breadcrumb";
import ProductListing from "@/src/components/products/product-listing";
import { getPublicCollectionBySlug } from "@/src/services/home.service";
import { serializePublicProduct } from "@/src/types/storefront";

export default async function CollectionPage({ params }: PageProps<"/colecoes/[slug]">) {
  const { slug } = await params;
  const collection = await getPublicCollectionBySlug(slug);
  if (!collection) notFound();

  return (
    <main className="mx-auto min-h-[50vh] max-w-7xl space-y-5 px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb current={collection.name} />
      <h1 className="text-2xl font-bold sm:text-3xl">{collection.name}</h1>
      {collection.description && <p className="max-w-3xl text-neutral-700">{collection.description}</p>}
      <ProductListing products={collection.products.map(({ product }) => serializePublicProduct(product))} />
    </main>
  );
}
