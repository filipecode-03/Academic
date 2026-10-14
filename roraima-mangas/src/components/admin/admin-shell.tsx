"use client";

import Link from "next/link";
import logo from "@/public/logo.jpg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Boxes,
  ChevronRight,
  CircleGauge,
  Images,
  LayoutGrid,
  Menu,
  Megaphone,
  Navigation,
  Package,
  PanelsTopLeft,
  X,
} from "lucide-react";
import Image from "next/image";

import AdminLogout from "@/src/components/admin/admin-logout";
import ThemeToggle from "@/src/components/theme-toggle";
import { Button } from "@/src/components/ui/button";
import { Sheet, SheetContent } from "@/src/components/ui/sheet";

const navigation = [
  {
    label: "Visão geral",
    items: [{ href: "/admin", label: "Dashboard", icon: CircleGauge }],
  },
  {
    label: "Catálogo",
    items: [
      { href: "/admin/produtos", label: "Produtos", icon: Package },
      { href: "/admin/colecoes", label: "Coleções", icon: Boxes },
    ],
  },
  {
    label: "Conteúdo",
    items: [
      { href: "/admin/banners", label: "Banners", icon: Images },
      { href: "/admin/avisos", label: "Avisos", icon: Megaphone },
      { href: "/admin/secoes", label: "Seções da Home", icon: PanelsTopLeft },
      { href: "/admin/blocos-home", label: "Atalhos da Home", icon: LayoutGrid },
      { href: "/admin/navbar", label: "Navbar", icon: Navigation },
    ],
  },
];

function NavigationContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      <div className="flex h-20 items-center gap-3 border-b border-white/10 px-5">
        <div className="grid size-10 place-items-center text-lg font-black">
          <Image src={logo} alt="Roraima Mangás" className="rounded-full" />
        </div>
        <div className="min-w-0">
          <p className="truncate font-heading text-base font-bold text-white">Roraima Mangás</p>
          <p className="text-xs text-slate-400">Painel administrativo</p>
        </div>
      </div>

      <nav
        className="flex-1 space-y-6 overflow-y-auto px-3 py-5"
        aria-label="Navegação administrativa"
      >
        {navigation.map((group) => (
          <div key={group.label}>
            <p className="mb-2 px-3 text-[0.68rem] font-semibold tracking-[0.16em] text-slate-500 uppercase">
              {group.label}
            </p>
            <div className="space-y-1">
              {group.items.map((item) => {
                const active =
                  item.href === "/admin" ? pathname === item.href : pathname.startsWith(item.href);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={`group flex min-h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-[color,background-color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:outline-none ${
                      active
                        ? "bg-brand text-brand-deep shadow-sm"
                        : "text-slate-300 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-[1.05rem]"
                      strokeWidth={active ? 2.3 : 1.9}
                    />
                    <span className="flex-1">{item.label}</span>
                    {active && <ChevronRight aria-hidden="true" className="size-3.5 opacity-60" />}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-white/10 p-3">
        <AdminLogout />
      </div>
    </>
  );
}

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground lg:flex">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col bg-brand-ink lg:flex">
        <NavigationContent />
      </aside>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          showCloseButton={false}
          className="w-[min(20rem,88vw)] max-w-none gap-0 border-white/10 bg-brand-ink p-0 text-white lg:hidden"
        >
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Fechar navegação"
            className="absolute top-4 right-3 z-10 text-slate-300 hover:bg-white/10 hover:text-white"
            onClick={() => setOpen(false)}
          >
            <X aria-hidden="true" />
          </Button>
          <NavigationContent onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>

      <div className="min-w-0 flex-1 lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center border-b border-border bg-background/90 px-4 backdrop-blur sm:px-6 lg:justify-end">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Abrir navegação"
            className="lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" />
          </Button>
          <div className="ml-3 lg:hidden">
            <p className="font-heading text-sm font-bold">Roraima Mangás</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
          <ThemeToggle className="ml-auto lg:ml-0" />
        </header>

        <main id="main-content" data-admin className="px-4 py-6 sm:px-6 sm:py-8 xl:px-10">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
