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
    <main className="mx-auto min-h-[50vh] max-w-7xl px-4 py-7 sm:px-6 sm:py-10 lg:px-8">
      <Breadcrumb current={product.name} />
      <article className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.9fr)] lg:gap-12">
        <ProductGallery name={product.name} images={product.images} />
        <div className="flex flex-col items-start gap-5 rounded-xl border bg-white p-5 shadow-sm sm:p-7">
          {product.category && <Link className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-neutral-800 transition hover:bg-yellow-200" href={`/categorias/${product.category.slug}`}>{product.category.name}</Link>}
          <div className="space-y-3">
            <h1 className="text-2xl font-bold leading-tight sm:text-3xl">{product.name}</h1>
            {product.description && <p className="whitespace-pre-wrap leading-7 text-neutral-600">{product.description}</p>}
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold">{formatPrice(product.price)}</p>
            {!available && <p className="font-semibold text-red-700">Produto indisponível</p>}
          </div>
          <ProductPurchaseControls product={product} />
        </div>
      </article>

      <section className="mt-10 rounded-xl border bg-white px-5 py-3 shadow-sm sm:mt-14 sm:px-7">
        <Accordion>
          <AccordionItem value="product-details" className="border-none">
            <AccordionTrigger className="py-4 text-base font-semibold hover:no-underline">Detalhes do Produto</AccordionTrigger>
            <AccordionContent className="pb-5">
              <dl className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                {product.details?.map((detail, index) => <div key={`${detail.title}-${index}`} className="flex justify-between gap-4 border-b py-2"><dt className="text-neutral-500">{detail.title}</dt><dd className="text-right font-medium">{detail.value}</dd></div>)}
                {product.category && <div className="flex justify-between gap-4 border-b py-2"><dt className="text-neutral-500">Categoria</dt><dd><Link href={`/categorias/${product.category.slug}`} className="font-medium underline underline-offset-4">{product.category.name}</Link></dd></div>}
                <div className="flex justify-between gap-4 border-b py-2"><dt className="text-neutral-500">Disponibilidade</dt><dd className="font-medium">{available ? "Disponível" : "Indisponível"}</dd></div>
                {product.isNew && <div className="flex justify-between gap-4 border-b py-2"><dt className="text-neutral-500">Novidade</dt><dd className="font-medium">Sim</dd></div>}
                {product.featured && <div className="flex justify-between gap-4 border-b py-2"><dt className="text-neutral-500">Destaque</dt><dd className="font-medium">Sim</dd></div>}
              </dl>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
