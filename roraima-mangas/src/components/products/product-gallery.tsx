"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";

type ProductImage = { id: string; image: string };

export default function ProductGallery({ name, images }: { name: string; images: ProductImage[] }) {
  const [activeImage, setActiveImage] = useState(0);
  if (images.length === 0) {
    return <div className="flex aspect-[4/5] items-center justify-center rounded-xl border bg-white text-sm text-neutral-500">Imagem indisponível</div>;
  }
  const current = images[activeImage] ?? images[0];

  return (
    <div className="space-y-3">
      <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl border bg-white p-5 shadow-sm sm:p-8">
        {/* Product images are stored on the configured object storage host. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={current.image} alt={name} className="h-full w-full object-contain" fetchPriority="high" />
      </div>
      {images.length > 1 && <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Imagens do produto">
        {images.map((image, index) => <Button key={image.id} type="button" variant="outline" aria-label={`Ver imagem ${index + 1}`} aria-pressed={index === activeImage} className={`size-16 shrink-0 overflow-hidden p-1 ${index === activeImage ? "border-neutral-900 ring-1 ring-neutral-900" : "border-neutral-200"}`} onClick={() => setActiveImage(index)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.image} alt="" className="size-full object-contain" />
        </Button>)}
      </div>}
    </div>
  );
}
