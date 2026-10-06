import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/src/components/products/breadcrumb";
import ProductGallery from "@/src/components/products/product-gallery";
import ProductPurchaseControls from "@/src/components/products/product-purchase-controls";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { getPublicProductBySlug } from "@/src/services/home.service";
import { serializePublicProduct } from "@/src/types/storefront";

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

export default async function ProductPage({ params }: PageProps<"/produtos/[slug]">) {
  const { slug } = await params;
  const result = await getPublicProductBySlug(slug);
  if (!result) notFound();
  const product = serializePublicProduct(result);
  const available = product.status === "ACTIVE" && product.stock > 0;

  return (
    <main className="mx-auto min-h-[50vh] max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <Breadcrumb current={product.name} />

      <article className="grid items-start gap-6 lg:grid-cols-[28rem_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[30rem_minmax(0,1fr)]">
        <ProductGallery
          name={product.name}
          images={product.images}
        />

        <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6 lg:p-7">
          <div className="space-y-5">
            {product.collections?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.collections.map(({ collection }) => (
                  <Link
                    key={collection.id}
                    href={`/colecoes/${collection.slug}`}
                    className="rounded-full bg-yellow-400 text-black px-3 py-1 text-xs font-semibold text-neutral-800 transition-colors hover:bg-yellow-200"
                  >
                    {collection.name}
                  </Link>
                ))}
              </div>
            )}

            <div className="space-y-2">
              <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                {product.name}
              </h1>

              {product.description && (
                <p className="whitespace-pre-wrap text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                  {product.description}
                </p>
              )}
            </div>

            <div>
              <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                {formatPrice(product.price)}
              </p>

              {!available && (
                <p className="mt-1 text-sm font-semibold text-red-700">
                  Produto indisponível
                </p>
              )}
            </div>

            <div className="border-t pt-5">
              <ProductPurchaseControls product={product} />
            </div>
          </div>
        </div>
      </article>

      <section className="mt-8 rounded-2xl border bg-white px-5 shadow-sm sm:mt-10 sm:px-7">
        <Accordion>
          <AccordionItem
            value="product-details"
            className="border-none"
          >
            <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">
              Detalhes do Produto
            </AccordionTrigger>

            <AccordionContent className="pb-5">
              <dl className="divide-y text-sm">
                {product.details?.map((detail, index) => (
                  <div
                    key={`${detail.title}-${index}`}
                    className="grid grid-cols-[1fr_auto] gap-4 py-3"
                  >
                    <dt className="text-neutral-500">
                      {detail.title}
                    </dt>

                    <dd className="text-right font-medium">
                      {detail.value}
                    </dd>
                  </div>
                ))}

                <div className="grid grid-cols-[1fr_auto] gap-4 py-3">
                  <dt className="text-neutral-500">
                    Disponibilidade
                  </dt>

                  <dd className="text-right font-medium">
                    {available ? "Disponível" : "Indisponível"}
                  </dd>
                </div>

                {product.isNew && (
                  <div className="grid grid-cols-[1fr_auto] gap-4 py-3">
                    <dt className="text-neutral-500">
                      Novidade
                    </dt>

                    <dd className="text-right font-medium">
                      Sim
                    </dd>
                  </div>
                )}

                {product.featured && (
                  <div className="grid grid-cols-[1fr_auto] gap-4 py-3">
                    <dt className="text-neutral-500">
                      Destaque
                    </dt>

                    <dd className="text-right font-medium">
                      Sim
                    </dd>
                  </div>
                )}
              </dl>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
