"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/src/components/products/product-card";
import Skeleton from "@/src/components/ui/skeleton";
import type { PublicProduct } from "@/src/types/storefront";

type PromoNotice = { id: string; content: string; position: "TOP" | "BELOW_CAROUSEL" };
type Banner = {
  id: string;
  image: string;
  destinationType: "NONE" | "PRODUCT" | "COLLECTION";
  product: { slug: string } | null;
  collection: { slug: string } | null;
};
type HomeSection = {
  id: string;
  title: string;
  type: "MANUAL" | "COLLECTION";
  displayProducts: PublicProduct[];
  collection?: { slug: string } | null;
};
type HomeResponse = {
  success: boolean;
  message?: string;
  home?: { promoNotices: PromoNotice[]; banners: Banner[]; sections: HomeSection[]; collectionBlocks: { id: string; title: string; image: string; collection: { slug: string } }[] };
};

function getBannerHref(banner: Banner) {
  if (banner.destinationType === "PRODUCT" && banner.product) return `/produtos/${banner.product.slug}`;
  if (banner.destinationType === "COLLECTION" && banner.collection) return `/colecoes/${banner.collection.slug}`;
  return null;
}

function NoticeStrip({ notices }: { notices: PromoNotice[] }) {
  if (notices.length === 0) return null;
  return (
    <div className="space-y-1 border-b border-yellow-400 bg-yellow-300 px-4 py-2 text-center text-sm font-semibold text-neutral-950 shadow-sm">
      {notices.map((notice) => <p key={notice.id}>{notice.content}</p>)}
    </div>
  );
}

function BannerCarousel({ banners }: { banners: Banner[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timerVersion, setTimerVersion] = useState(0);
  const touchStart = useRef<number | null>(null);
  const swipeHandled = useRef(false);
  useEffect(() => {
    if (banners.length < 2) return;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % banners.length), 10_000);
    return () => window.clearInterval(timer);
  }, [banners.length, timerVersion]);
  if (banners.length === 0) return null;
  const banner = banners[activeIndex];
  const href = getBannerHref(banner);
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={banner.image} alt="Banner da loja" className="h-full w-full object-cover" fetchPriority="high" />
  );

  return (
    <section aria-label="Banners em destaque" className="relative mx-auto aspect-[2/1] w-full max-w-7xl overflow-hidden bg-neutral-100 shadow-sm touch-pan-y sm:aspect-[3/1] sm:rounded-b-xl" onPointerDown={(event) => { if (event.pointerType === "touch") touchStart.current = event.clientX; }} onPointerUp={(event) => {
      if (event.pointerType !== "touch" || touchStart.current === null) return;
      const distance = event.clientX - touchStart.current;
      touchStart.current = null;
      if (Math.abs(distance) < 40 || banners.length < 2) return;
      swipeHandled.current = true;
      setActiveIndex((index) => (index + (distance < 0 ? 1 : -1) + banners.length) % banners.length);
      setTimerVersion((version) => version + 1);
    }}>
      <div key={banner.id} className="h-full animate-[heroFade_700ms_ease-in-out]">{href ? <Link href={href} aria-label="Acessar conteúdo do banner" className="block h-full" onClick={(event) => { if (swipeHandled.current) { event.preventDefault(); swipeHandled.current = false; } }}>{image}</Link> : image}</div>
      {banners.length > 1 && <>
        <button type="button" aria-label="Banner anterior" className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 md:flex" onClick={() => { setActiveIndex((index) => (index - 1 + banners.length) % banners.length); setTimerVersion((version) => version + 1); }}>
          <ChevronLeft aria-hidden="true" />
        </button>
        <button type="button" aria-label="Próximo banner" className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 md:flex" onClick={() => { setActiveIndex((index) => (index + 1) % banners.length); setTimerVersion((version) => version + 1); }}>
          <ChevronRight aria-hidden="true" />
        </button>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((item, index) => <button key={item.id} type="button" aria-label={`Mostrar banner ${index + 1}`} aria-current={index === activeIndex} className={`h-2.5 w-2.5 rounded-full border border-white shadow ${index === activeIndex ? "bg-white" : "bg-black/40"}`} onClick={() => { setActiveIndex(index); setTimerVersion((version) => version + 1); }} />)}
        </div>
      </>}
    </section>
  );
}

function HomeProductCarousel({ products }: { products: PublicProduct[] }) {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: -1 | 1) => track.current?.scrollBy({ left: direction * track.current.clientWidth * 0.9, behavior: "smooth" });
  return <div className="relative">
    <div className="mb-2 hidden justify-end gap-2 md:flex">
      <button type="button" aria-label="Produtos anteriores" onClick={() => move(-1)} className="rounded-full border bg-white p-2 shadow-sm hover:bg-neutral-100"><ChevronLeft className="size-4" /></button>
      <button type="button" aria-label="Próximos produtos" onClick={() => move(1)} className="rounded-full border bg-white p-2 shadow-sm hover:bg-neutral-100"><ChevronRight className="size-4" /></button>
    </div>
    <div ref={track} className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-3 sm:gap-4">
      {products.map((product) => <div key={product.id} className="w-[calc((100%_-_0.75rem)/2)] shrink-0 snap-start sm:w-[calc((100%_-_2rem)/3)] lg:w-[calc((100%_-_3rem)/4)]"><ProductCard product={product} /></div>)}
    </div>
  </div>;
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
      {home ? <BannerCarousel banners={home.banners} /> : <Skeleton className="mx-auto aspect-[2/1] w-full max-w-7xl sm:aspect-[3/1] sm:rounded-b-xl" />}
      <NoticeStrip notices={notices.filter(({ position }) => position === "BELOW_CAROUSEL")} />
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {home && home.collectionBlocks.length > 0 && <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{home.collectionBlocks.map((block) => <Link key={block.id} href={`/colecoes/${block.collection.slug}`} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200 shadow-sm">
          {/* Home collection shortcut banners use a 4:3 crop. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}<img src={block.image} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-12 text-lg font-bold text-white sm:text-xl">{block.title}</span>
        </Link>)}</section>}
        {!home ? <div className="space-y-10" aria-label="Carregando conteúdo da loja">
          {[0, 1].map((row) => <section key={row} className="space-y-4">
            <div className="flex items-center justify-between"><Skeleton className="h-7 w-48" /><Skeleton className="h-5 w-20" /></div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">{[0, 1, 2, 3].map((card) => <Skeleton key={card} className="aspect-[3/4] rounded-xl" />)}</div>
          </section>)}
        </div> : home.sections.map((section) => <section key={section.id} className="space-y-4">
          <div className="flex items-end justify-between gap-4 border-b border-neutral-200 pb-3">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{section.title}</h2>
            <Link href={section.type === "COLLECTION" && section.collection ? `/colecoes/${section.collection.slug}` : `/secoes/${section.id}`} className="shrink-0 rounded-md px-3 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-yellow-100 hover:text-black">Ver todos <span aria-hidden="true">→</span></Link>
          </div>
          {section.displayProducts.length === 0 ? (
            <p className="rounded-xl border border-dashed bg-white p-6 text-sm text-neutral-600">Nenhum produto disponível nesta seção.</p>
          ) : (
            <HomeProductCarousel products={section.displayProducts.slice(0, 10)} />
          )}
        </section>)}
      </div>
    </main>
  );
}
