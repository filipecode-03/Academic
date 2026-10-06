import Link from "next/link";
import type { PublicProduct } from "@/src/types/storefront";

function formatPrice(value: number | string) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(value));
}

export default function ProductCard({ product }: { product: PublicProduct }) {
  const image = product.images[0]?.image;
  const available = product.status === "ACTIVE" && product.stock > 0;

  return (
    <article className="group min-w-0 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/produtos/${product.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-900">
        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-50 p-2 sm:p-3">
          {image ? (
            // Product images are stored on the configured object storage host.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt={product.name} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center text-sm text-neutral-500">
              Imagem indisponível
            </div>
          )}
          {(product.featured || product.isNew || !available) && (
            <div className="absolute left-2 top-2 flex flex-wrap gap-1">
              {!available && <span className="rounded bg-neutral-700 px-2 py-1 text-xs text-white">Indisponível</span>}
              {product.isNew && <span className="rounded bg-black px-2 py-1 text-xs text-white">Novo</span>}
              {product.featured && <span className="rounded bg-yellow-300 px-2 py-1 text-xs text-black">Destaque</span>}
            </div>
          )}
        </div>
        <div className="space-y-1.5 p-3 sm:p-4">
          <h3 className="line-clamp-2 min-h-10 text-sm font-medium leading-5 transition-colors group-hover:text-neutral-600 sm:text-base">{product.name}</h3>
          <p className="font-semibold">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}
