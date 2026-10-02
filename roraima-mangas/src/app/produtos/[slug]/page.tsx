import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/src/components/products/breadcrumb";
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

  return (
    <main className="mx-auto min-h-[50vh] max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb current={product.name} />
      <article className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          {product.images.length === 0 ? <div className="flex aspect-[3/4] items-center justify-center bg-neutral-100 text-neutral-500">Imagem indisponível</div> : product.images.map((image) => (
            // Product images are stored on the configured object storage host.
            // eslint-disable-next-line @next/next/no-img-element
            <img key={image.id} src={image.image} alt={product.name} className="max-h-[38rem] w-full object-contain" />
          ))}
        </div>
        <div className="space-y-4">
          {product.category && <Link className="text-sm underline" href={`/categorias/${product.category.slug}`}>{product.category.name}</Link>}
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold">{formatPrice(product.price)}</p>
          {product.compareAtPrice != null && Number(product.compareAtPrice) > product.price && <p className="text-neutral-500 line-through">{formatPrice(Number(product.compareAtPrice))}</p>}
          {product.description && <p className="whitespace-pre-wrap leading-7">{product.description}</p>}
        </div>
      </article>
    </main>
  );
}
