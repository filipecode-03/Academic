"use client";

import { useEffect } from "react";
import { Button } from "@/src/components/ui/button";

export default function StorefrontError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error("Erro ao renderizar uma página pública da loja."); }, []);
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-7xl flex-col items-center justify-center gap-4 px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">Não foi possível carregar esta página</h1>
      <p className="text-neutral-600">Tente novamente em instantes.</p>
      <Button onClick={() => reset()}>Tentar novamente</Button>
    </main>
  );
}
