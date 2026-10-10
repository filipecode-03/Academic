"use client";

import { useState } from "react";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useCart } from "@/src/components/cart/cart-context";
import type { PublicProduct } from "@/src/types/storefront";

export default function ProductPurchaseControls({ product }: { product: PublicProduct }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");
  const { addProduct } = useCart();
  const available = product.status === "ACTIVE" && product.stock > 0;

  function addToCart() {
    setError("");
    const success = addProduct(product, quantity);
    if (!success) {
      setError("Este produto não está disponível para compra.");
      return;
    }
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  }

  return (
    <div className="w-full space-y-4">
  {!available ? (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm font-semibold text-red-700">
        <span className="size-2 rounded-full bg-red-600" />
        Produto indisponível
      </div>

      <Button
        type="button"
        size="lg"
        disabled
        className="h-12 w-full gap-2"
      >
        <ShoppingBag className="size-5" />
        Indisponível
      </Button>
    </div>
  ) : (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex h-12 items-center justify-between rounded-lg border bg-white sm:w-auto">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Diminuir quantidade"
          disabled={quantity <= 1}
          onClick={() =>
            setQuantity((current) => Math.max(1, current - 1))
          }
          className="size-11"
        >
          <Minus className="size-4" />
        </Button>

        <span
          className="min-w-10 text-center text-sm font-semibold"
          aria-live="polite"
        >
          {quantity}
        </span>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Aumentar quantidade"
          disabled={quantity >= product.stock}
          onClick={() =>
            setQuantity((current) =>
              Math.min(product.stock, current + 1)
            )
          }
          className="size-11"
        >
          <Plus className="size-4" />
        </Button>
      </div>

      <Button
        type="button"
        size="lg"
        className="h-12 w-full gap-2 bg-neutral-900 text-white transition-colors hover:bg-neutral-700 sm:flex-1"
        onClick={addToCart}
      >
        {added ? (
          <Check className="size-5" />
        ) : (
          <ShoppingBag className="size-5" />
        )}

        {added
          ? "Adicionado à sacola"
          : "Adicionar ao carrinho"}
      </Button>
    </div>
  )}

  {error && (
    <p
      role="alert"
      className="text-sm font-medium text-red-700"
    >
      {error}
    </p>
  )}

  {added && !error && (
    <p
      role="status"
      className="text-sm text-green-700"
    >
      {quantity}{" "}
      {quantity === 1
        ? "unidade adicionada"
        : "unidades adicionadas"}{" "}
      à sacola.
    </p>
  )}
</div>
  );
}
