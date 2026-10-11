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
          <Image src={logo} alt="logo" className="rounded-full" />
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
                    className={`group flex min-h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:outline-none ${
                      active
                        ? "bg-brand text-brand-deep shadow-sm"
                        : "text-slate-300 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    <Icon className="size-[1.05rem]" strokeWidth={active ? 2.3 : 1.9} />
                    <span className="flex-1">{item.label}</span>
                    {active && <ChevronRight className="size-3.5 opacity-60" />}
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
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 lg:flex">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col bg-slate-950 lg:flex">
        <NavigationContent />
      </aside>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            className="absolute inset-0 bg-slate-950/55 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />
          <aside className="relative flex h-full w-[min(20rem,88vw)] flex-col bg-slate-950 shadow-2xl motion-safe:animate-in motion-safe:duration-200 motion-safe:slide-in-from-left">
            <button
              type="button"
              aria-label="Fechar navegação"
              className="absolute top-5 right-3 z-10 grid size-9 place-items-center rounded-lg text-slate-300 transition hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              <X className="size-5" />
            </button>
            <NavigationContent onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}

      <div className="min-w-0 flex-1 lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur sm:px-6 lg:hidden">
          <button
            type="button"
            aria-label="Abrir navegação"
            className="grid size-10 place-items-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </button>
          <div className="ml-3">
            <p className="font-heading text-sm font-bold">Roraima Mangás</p>
            <p className="text-xs text-slate-500">Admin</p>
          </div>
        </header>

        <main data-admin className="px-4 py-6 sm:px-6 sm:py-8 xl:px-10">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
