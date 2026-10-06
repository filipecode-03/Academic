"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { PublicProduct } from "@/src/types/storefront";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string | null;
  status: string;
  stock: number;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addProduct: (product: PublicProduct, quantity: number) => boolean;
  setQuantity: (productId: string, quantity: number) => void;
  removeProduct: (productId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const CART_STORAGE_KEY = "roraima-mangas:cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setItems(parsed.filter((item): item is CartItem =>
            typeof item?.productId === "string" &&
            typeof item?.slug === "string" &&
            typeof item?.name === "string" &&
            Number.isFinite(item?.price) &&
            Number.isInteger(item?.quantity) && item.quantity > 0 &&
            Number.isInteger(item.stock) && item.stock >= 0 && item.status === "ACTIVE" && item.quantity <= item.stock
          ));
        }
      }
    } catch (cause) {
      console.error("Não foi possível restaurar o carrinho salvo.", cause);
      window.localStorage.removeItem(CART_STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [hydrated, items]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + item.price * item.quantity, 0),
    addProduct(product, quantity) {
      const existing = items.find((entry) => entry.productId === product.id);
      if (product.status !== "ACTIVE" || product.stock < 1 || !Number.isInteger(quantity) || quantity < 1 || quantity > product.stock || (existing?.quantity ?? 0) + quantity > product.stock) return false;
      const item: CartItem = {
        productId: product.id,
        slug: product.slug,
        name: product.name,
        price: Number(product.price),
        image: product.images[0]?.image ?? null,
        status: product.status,
        stock: product.stock,
        quantity: Math.floor(quantity),
      };
      setItems((current) => {
        const existing = current.find((entry) => entry.productId === product.id);
        return existing
          ? current.map((entry) => entry.productId === product.id
              ? { ...entry, quantity: entry.quantity + item.quantity, stock: product.stock, status: product.status }
              : entry)
          : [...current, item];
      });
      return true;
    },
    setQuantity(productId, quantity) {
      if (!Number.isFinite(quantity) || quantity < 1) return;
      setItems((current) => current.map((item) => item.productId === productId
        ? { ...item, quantity: Math.min(item.stock, Math.floor(quantity)) }
        : item));
    },
    removeProduct(productId) {
      setItems((current) => current.filter((item) => item.productId !== productId));
    },
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart deve ser usado dentro de CartProvider.");
  return context;
}
