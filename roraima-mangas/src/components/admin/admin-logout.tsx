"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { useState } from "react";

import { Button } from "@/src/components/ui/button";

export default function AdminLogout() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  async function handleLogout() {
    setIsLoggingOut(true);

    try {
      await signOut({
        callbackUrl: "/admin/login",
        redirect: false,
      });

      window.location.replace("/admin/login");
    } catch {
      setIsLoggingOut(false);
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={handleLogout}
      disabled={isLoggingOut}
      className="w-full justify-start text-slate-300 hover:bg-white/8 hover:text-white"
    >
      <LogOut aria-hidden="true" className="size-[1.05rem]" />
      <span>{isLoggingOut ? "Saindo…" : "Sair do painel"}</span>
    </Button>
  );
}
