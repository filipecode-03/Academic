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
    <main className="mx-auto min-h-[50vh] max-w-7xl space-y-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <Breadcrumb current={collection.name} />

      {collection.image ? (
        <header className="relative isolate flex min-h-52 w-full items-end overflow-hidden rounded-2xl bg-neutral-200 shadow-sm sm:min-h-64 lg:min-h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={collection.image}
            alt=""
            className="absolute inset-0 -z-10 size-full object-cover object-center"
          />

          <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/30 to-black/5" />

          <div className="relative max-w-3xl p-5 text-white sm:p-8 lg:p-10">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              {collection.name}
            </h1>

            {collection.description && (
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                {collection.description}
              </p>
            )}
          </div>
        </header>
      ) : (
        <header>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {collection.name}
          </h1>

          {collection.description && (
            <p className="mt-2 max-w-3xl leading-relaxed text-neutral-700">
              {collection.description}
            </p>
          )}
        </header>
      )}

      <ProductListing
        products={collection.products.map(({ product }) =>
          serializePublicProduct(product)
        )}
      />
    </main>
  );
}
