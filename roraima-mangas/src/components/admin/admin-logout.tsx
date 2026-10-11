"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function AdminLogout() {
  async function handleLogout() {
    await signOut({
      callbackUrl: "/admin/login",
    });
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="flex min-h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:outline-none"
    >
      <LogOut className="size-[1.05rem]" />
      <span>Sair do painel</span>
    </button>
  );
}
