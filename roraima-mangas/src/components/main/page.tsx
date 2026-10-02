"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/src/components/products/product-card";
import type { PublicProduct } from "@/src/types/storefront";

type PromoNotice = { id: string; content: string; position: "TOP" | "BELOW_CAROUSEL" };
type Banner = {
  id: string;
  image: string;
  destinationType: "NONE" | "PRODUCT" | "CATEGORY" | "COLLECTION";
  product: { slug: string } | null;
  category: { slug: string } | null;
  collection: { slug: string } | null;
};
type HomeSection = {
  id: string;
  title: string;
  type: "MANUAL" | "CATEGORY" | "COLLECTION";
  displayProducts: PublicProduct[];
};
type HomeResponse = {
  success: boolean;
  message?: string;
  home?: { promoNotices: PromoNotice[]; banners: Banner[]; sections: HomeSection[] };
};

function getBannerHref(banner: Banner) {
  if (banner.destinationType === "PRODUCT" && banner.product) return `/produtos/${banner.product.slug}`;
  if (banner.destinationType === "CATEGORY" && banner.category) return `/categorias/${banner.category.slug}`;
  if (banner.destinationType === "COLLECTION" && banner.collection) return `/colecoes/${banner.collection.slug}`;
  return null;
}

function NoticeStrip({ notices }: { notices: PromoNotice[] }) {
  if (notices.length === 0) return null;
  return (
    <div className="space-y-1 bg-yellow-300 px-4 py-2 text-center text-sm font-medium text-black">
      {notices.map((notice) => <p key={notice.id}>{notice.content}</p>)}
    </div>
  );
}

function BannerCarousel({ banners }: { banners: Banner[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  if (banners.length === 0) return null;
  const banner = banners[activeIndex];
  const href = getBannerHref(banner);
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={banner.image} alt="Banner da loja" className="h-full w-full object-cover" fetchPriority="high" />
  );

  return (
    <section aria-label="Banners em destaque" className="relative mx-auto aspect-[2/1] w-full max-w-7xl overflow-hidden bg-neutral-100 sm:aspect-[3/1]">
      {href ? <Link href={href} aria-label="Acessar conteúdo do banner">{image}</Link> : image}
      {banners.length > 1 && <>
        <button type="button" aria-label="Banner anterior" className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow" onClick={() => setActiveIndex((index) => (index - 1 + banners.length) % banners.length)}>
          <ChevronLeft aria-hidden="true" />
        </button>
        <button type="button" aria-label="Próximo banner" className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow" onClick={() => setActiveIndex((index) => (index + 1) % banners.length)}>
          <ChevronRight aria-hidden="true" />
        </button>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((item, index) => <button key={item.id} type="button" aria-label={`Mostrar banner ${index + 1}`} aria-current={index === activeIndex} className={`h-2.5 w-2.5 rounded-full border border-white ${index === activeIndex ? "bg-white" : "bg-black/40"}`} onClick={() => setActiveIndex(index)} />)}
        </div>
      </>}
    </section>
  );
}

export default function Main() {
  const [home, setHome] = useState<HomeResponse["home"]>();
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetch("/api/home", { cache: "no-store" })
      .then(async (response) => {
        const data = await response.json() as HomeResponse;
        if (!response.ok || !data.success || !data.home) {
          throw new Error(data.message ?? "Não foi possível carregar a Home.");
        }
        if (!cancelled) setHome(data.home);
      })
      .catch((cause: unknown) => {
        console.error("Erro ao carregar a Home pública:", cause);
        if (!cancelled) setError("Não foi possível carregar o conteúdo da loja agora.");
      });
    return () => { cancelled = true; };
  }, []);

  if (error) return <main className="mx-auto min-h-40 max-w-7xl px-4 py-10 text-center" role="status">{error}</main>;

  const notices = home?.promoNotices ?? [];
  return (
    <main className="min-h-40">
      <NoticeStrip notices={notices.filter(({ position }) => position === "TOP")} />
      <BannerCarousel banners={home?.banners ?? []} />
      <NoticeStrip notices={notices.filter(({ position }) => position === "BELOW_CAROUSEL")} />
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {(home?.sections ?? []).map((section) => <section key={section.id} className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold sm:text-2xl">{section.title}</h2>
            <Link href={`/secoes/${section.id}`} className="shrink-0 text-sm font-semibold underline underline-offset-4">Ver todos</Link>
          </div>
          {section.displayProducts.length === 0 ? (
            <p className="rounded border p-5 text-sm text-neutral-600">Nenhum produto disponível nesta seção.</p>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {section.displayProducts.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          )}
        </section>)}
      </div>
    </main>
  );
}
