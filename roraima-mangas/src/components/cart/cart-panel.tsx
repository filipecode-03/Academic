"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/src/components/ui/sheet";
import { useCart } from "@/src/components/cart/cart-context";
import { useState } from "react";

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

export default function CartPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, itemCount, subtotal, setQuantity, removeProduct } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  async function confirmOrder() {
    setCheckout(true);
    setCheckoutError("");
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(({ productId, quantity }) => ({ productId, quantity })),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message ?? "Não foi possível confirmar o pedido.");
      window.location.assign(result.whatsappUrl);
    } catch (error) {
      setCheckoutError(
        error instanceof Error ? error.message : "Não foi possível confirmar o pedido.",
      );
    } finally {
      setCheckout(false);
    }
  }

  return (
    <Sheet open={open} onOpenChange={(nextOpen) => !nextOpen && onClose()}>
      <SheetContent side="right" className="gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b px-5 py-4 text-left">
          <SheetTitle className="flex items-center gap-2 text-lg">
            <ShoppingBag className="size-5" aria-hidden="true" /> Sacola ({itemCount})
          </SheetTitle>
          <SheetDescription className="sr-only">
            Revise os produtos adicionados antes de continuar para o WhatsApp.
          </SheetDescription>
        </SheetHeader>
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
            <ShoppingBag className="size-10 text-muted-foreground" aria-hidden="true" />
            <p className="text-muted-foreground">Sua sacola está vazia.</p>
            <Button variant="outline" onClick={onClose}>
              Continuar comprando
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-4 overflow-y-auto p-5">
              {items.map((item) => (
                <li key={item.productId} className="flex gap-3 border-b pb-4">
                  <Link
                    href={`/produtos/${item.slug}`}
                    onClick={onClose}
                    className="size-20 shrink-0 overflow-hidden rounded bg-muted"
                  >
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.image} alt="" className="size-full object-contain" />
                    ) : (
                      <span className="flex h-full items-center justify-center text-center text-xs text-muted-foreground">
                        Sem imagem
                      </span>
                    )}
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/produtos/${item.slug}`}
                        onClick={onClose}
                        className="line-clamp-2 font-medium hover:underline"
                      >
                        {item.name}
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        aria-label={`Remover ${item.name}`}
                        onClick={() => removeProduct(item.productId)}
                      >
                        <Trash2 />
                      </Button>
                    </div>
                    <p className="mt-1 text-sm font-semibold">{formatPrice(item.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon-sm"
                        aria-label={`Diminuir quantidade de ${item.name}`}
                        disabled={item.quantity <= 1}
                        onClick={() => setQuantity(item.productId, item.quantity - 1)}
                      >
                        <Minus />
                      </Button>
                      <span
                        className="min-w-6 text-center"
                        aria-label={`Quantidade: ${item.quantity}`}
                      >
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon-sm"
                        aria-label={`Aumentar quantidade de ${item.name}`}
                        disabled={item.quantity >= item.stock}
                        onClick={() => setQuantity(item.productId, item.quantity + 1)}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <footer className="space-y-4 border-t p-5">
              <div className="flex justify-between text-lg font-semibold">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {checkoutError && (
                <p role="alert" className="text-sm text-destructive">
                  {checkoutError}
                </p>
              )}
              <Button
                className="w-full"
                variant="default"
                disabled={checkout}
                onClick={() => void confirmOrder()}
              >
                {checkout ? "Confirmando pedido…" : "Confirmar e continuar no WhatsApp"}
              </Button>
            </footer>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
