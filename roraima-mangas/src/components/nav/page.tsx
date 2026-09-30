import { Menu, Search, Heart, ShoppingBag } from "lucide-react";
import logo from "@/public/logo.jpg";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="border-b border-yellow-400 bg-black text-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:h-24 lg:px-10">
        
        {/* Menu + Busca */}
        <div className="flex items-center gap-1 sm:gap-3">
          <button
            type="button"
            aria-label="Abrir menu"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            type="button"
            aria-label="Pesquisar"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            <Search className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Logo */}
        <Image
          src={logo}
          alt="Roraima Mangas"
          className="w-16 rounded-full sm:w-20 lg:w-24"
        />

        {/* Favoritos + Carrinho */}
        <div className="flex items-center gap-1 sm:gap-3">
          <button
            type="button"
            aria-label="Favoritos"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            type="button"
            aria-label="Sacola de compras"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}