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
  const outOfStock = product.status === "OUT_OF_STOCK";

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
    <div className="space-y-4">
      {outOfStock ? <>
        <p className="font-semibold text-red-700">Produto esgotado</p>
        <Button type="button" size="lg" disabled className="h-12 w-full gap-2 sm:w-auto sm:min-w-64">
          <ShoppingBag className="size-5" /> Esgotado
        </Button>
      </> : <>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Quantidade</span>
          <div className="flex items-center rounded-md border bg-white">
            <Button type="button" variant="ghost" size="icon" aria-label="Diminuir quantidade" disabled={quantity <= 1} onClick={() => setQuantity((current) => Math.max(1, current - 1))}><Minus /></Button>
            <span className="min-w-10 text-center font-medium" aria-live="polite">{quantity}</span>
            <Button type="button" variant="ghost" size="icon" aria-label="Aumentar quantidade" onClick={() => setQuantity((current) => current + 1)}><Plus /></Button>
          </div>
        </div>
        <Button type="button" size="lg" className="h-12 w-full gap-2 bg-neutral-900 text-white hover:bg-neutral-700 sm:w-auto sm:min-w-64" onClick={addToCart}>
          {added ? <Check className="size-5" /> : <ShoppingBag className="size-5" />}
          {added ? "Adicionado à sacola" : "Adicionar ao carrinho"}
        </Button>
      </>}
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
      {added && <p role="status" className="text-sm text-green-700">{quantity} {quantity === 1 ? "unidade adicionada" : "unidades adicionadas"} à sacola.</p>}
    </div>
  );
}
