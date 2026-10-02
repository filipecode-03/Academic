"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useCart } from "@/src/components/cart/cart-context";

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

export default function CartPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, itemCount, subtotal, setQuantity, removeProduct } = useCart();
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="cart-title" className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl">
        <header className="flex items-center justify-between border-b px-5 py-4">
          <h2 id="cart-title" className="flex items-center gap-2 text-lg font-semibold"><ShoppingBag className="size-5" /> Sacola ({itemCount})</h2>
          <Button variant="ghost" size="icon" aria-label="Fechar sacola" onClick={onClose}><X /></Button>
        </header>
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
            <ShoppingBag className="size-10 text-neutral-400" />
            <p className="text-neutral-600">Sua sacola está vazia.</p>
            <Button variant="outline" onClick={onClose}>Continuar comprando</Button>
          </div>
        ) : <>
          <ul className="flex-1 space-y-4 overflow-y-auto p-5">
            {items.map((item) => <li key={item.productId} className="flex gap-3 border-b pb-4">
              <Link href={`/produtos/${item.slug}`} onClick={onClose} className="size-20 shrink-0 overflow-hidden rounded bg-neutral-100">
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.image} alt="" className="size-full object-contain" />
                ) : <span className="flex h-full items-center justify-center text-center text-xs text-neutral-500">Sem imagem</span>}
              </Link>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <Link href={`/produtos/${item.slug}`} onClick={onClose} className="line-clamp-2 font-medium hover:underline">{item.name}</Link>
                  <Button variant="ghost" size="icon-sm" aria-label={`Remover ${item.name}`} onClick={() => removeProduct(item.productId)}><Trash2 /></Button>
                </div>
                <p className="mt-1 text-sm font-semibold">{formatPrice(item.price)}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Button variant="outline" size="icon-sm" aria-label={`Diminuir quantidade de ${item.name}`} disabled={item.quantity <= 1} onClick={() => setQuantity(item.productId, item.quantity - 1)}><Minus /></Button>
                  <span className="min-w-6 text-center" aria-label={`Quantidade: ${item.quantity}`}>{item.quantity}</span>
                  <Button variant="outline" size="icon-sm" aria-label={`Aumentar quantidade de ${item.name}`} onClick={() => setQuantity(item.productId, item.quantity + 1)}><Plus /></Button>
                </div>
              </div>
            </li>)}
          </ul>
          <footer className="space-y-4 border-t p-5">
            <div className="flex justify-between text-lg font-semibold"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <p className="text-xs text-neutral-500">Frete e checkout serão definidos em uma próxima etapa.</p>
            <Button className="w-full" variant="default" onClick={onClose}>Continuar comprando</Button>
          </footer>
        </>}
      </section>
    </div>
  );
}
