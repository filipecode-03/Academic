"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/logo";
import { navigation } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-natural/10 bg-forest-black/95 text-natural backdrop-blur-md"
          : "border-transparent bg-transparent text-natural"
      }`}
    >
      <div className="page-shell flex h-[4.75rem] items-center justify-between gap-6">
        <a href="#inicio" aria-label="Ir para o início" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-natural/75 transition-colors hover:text-natural"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden border border-natural/40 px-5 py-3 text-sm font-medium transition-colors hover:bg-natural hover:text-forest-black lg:inline-flex"
        >
          Solicitar orçamento
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-natural/35 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="sr-only">{menuOpen ? "Fechar menu" : "Abrir menu"}</span>
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-1 block h-px w-5 bg-current transition-transform ${
                menuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-1 left-0 block h-px w-5 bg-current transition-transform ${
                menuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`border-t border-natural/10 bg-forest-black lg:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <nav aria-label="Navegação móvel" className="page-shell py-6">
          <ul className="grid divide-y divide-natural/10">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-2xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex w-full justify-center bg-natural px-5 py-4 font-medium text-forest-black"
          >
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
