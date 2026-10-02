import type { ReactNode } from "react";
import Nav from "@/src/components/nav/page";
import Footer from "@/src/components/footer/page";
import { CartProvider } from "@/src/components/cart/cart-context";

export default function StorefrontLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-950">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </CartProvider>
  );
}
