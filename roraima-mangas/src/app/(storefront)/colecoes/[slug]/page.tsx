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
    <main className="mx-auto min-h-[50vh] max-w-7xl space-y-7 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <Breadcrumb current={collection.name} />
      {collection.image ? <header className="relative isolate flex aspect-[3/2] max-h-64 items-end overflow-hidden rounded-xl bg-neutral-200 shadow-sm sm:aspect-[8/3] sm:max-h-80">
        {/* Collection artwork is cropped into a wide hero; source recommendation is 1600×600. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}<img src={collection.image} alt="" className="absolute inset-0 -z-10 size-full object-cover object-[center_35%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="p-5 text-white sm:p-8"><h1 className="text-2xl font-bold sm:text-4xl">{collection.name}</h1>{collection.description && <p className="mt-2 max-w-3xl text-sm text-white/90 sm:text-base">{collection.description}</p>}</div>
      </header> : <header><h1 className="text-2xl font-bold sm:text-3xl">{collection.name}</h1>{collection.description && <p className="mt-2 max-w-3xl text-neutral-700">{collection.description}</p>}</header>}
      <ProductListing products={collection.products.map(({ product }) => serializePublicProduct(product))} />
    </main>
  );
}
