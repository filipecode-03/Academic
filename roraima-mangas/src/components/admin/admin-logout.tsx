"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

import { Button } from "@/src/components/ui/button";

export default function AdminLogout() {
  async function handleLogout() {
    await signOut({
      callbackUrl: "/admin/login",
    });
  }

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={handleLogout}
      className="w-full justify-start text-slate-300 hover:bg-white/8 hover:text-white"
    >
      <LogOut aria-hidden="true" className="size-[1.05rem]" />
      <span>Sair do painel</span>
    </Button>
  );
}
