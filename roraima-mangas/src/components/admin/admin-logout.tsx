"use client";

import { signOut } from "next-auth/react";

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
    >
      Sair
    </button>
  );
}