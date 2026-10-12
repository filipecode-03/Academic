import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export const metadata: Metadata = { title: "Termos de Uso" };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-natural px-5 py-10 text-forest-black sm:px-10">
      <Link href="/" aria-label="Voltar para a página inicial" className="text-forest"><Logo /></Link>
      <article className="mx-auto max-w-3xl py-20">
        <p className="text-sm text-moss">Documento em preparação</p>
        <h1 className="mt-5 font-display text-5xl font-medium tracking-[-0.05em] sm:text-7xl">Termos de Uso</h1>
        <div className="mt-12 space-y-6 border-t border-forest/20 pt-8 leading-8 text-forest-black/70">
          <p>Este espaço está preparado para receber os termos aplicáveis ao site institucional da Nortea Digital.</p>
          <p>O conteúdo definitivo deve identificar o responsável pelo site, as condições de uso, limitações de responsabilidade, propriedade intelectual e o canal de contato válido.</p>
          <p className="border-l-2 border-moss pl-4 font-medium text-forest">[REVISAR COM AS INFORMAÇÕES REAIS DO NEGÓCIO ANTES DA PUBLICAÇÃO]</p>
        </div>
        <Link href="/" className="mt-12 inline-flex border border-forest px-5 py-3 text-sm font-medium hover:bg-forest hover:text-natural">Voltar para a Nortea</Link>
      </article>
    </main>
  );
}
