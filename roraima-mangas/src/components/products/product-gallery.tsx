"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";

type ProductImage = { id: string; image: string };

export default function ProductGallery({ name, images }: { name: string; images: ProductImage[] }) {
  const [activeImage, setActiveImage] = useState(0);
  if (images.length === 0) {
    return (
      <div className="mx-auto flex aspect-[4/5] w-full max-w-[24rem] items-center justify-center rounded-xl border border-border bg-card text-sm text-muted-foreground">
        Imagem indisponível
      </div>
    );
  }
  const current = images[activeImage] ?? images[0];

  return (
    <div className="w-full lg:w-[28rem] xl:w-[30rem]">
      <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm sm:p-4 lg:p-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.image}
          alt={name}
          className="size-full object-contain"
          fetchPriority="high"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Imagens do produto">
          {images.map((image, index) => (
            <Button
              key={image.id}
              type="button"
              variant="outline"
              aria-label={`Ver imagem ${index + 1}`}
              aria-pressed={index === activeImage}
              className={`size-16 shrink-0 overflow-hidden rounded-lg p-1 transition-colors ${
                index === activeImage
                  ? "border-primary ring-1 ring-primary"
                  : "border-border hover:border-muted-foreground"
              }`}
              onClick={() => setActiveImage(index)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.image} alt="" className="size-full object-contain" />
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
