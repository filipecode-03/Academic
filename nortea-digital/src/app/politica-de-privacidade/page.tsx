import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-natural px-5 py-10 text-forest-black sm:px-10">
      <Link href="/" aria-label="Voltar para a página inicial" className="text-forest"><Logo /></Link>
      <article className="mx-auto max-w-3xl py-20">
        <p className="text-sm text-moss">Documento em preparação</p>
        <h1 className="mt-5 font-display text-5xl font-medium tracking-[-0.05em] sm:text-7xl">Política de Privacidade</h1>
        <div className="mt-12 space-y-6 border-t border-forest/20 pt-8 leading-8 text-forest-black/70">
          <p>Esta primeira versão usa dados de contato provisórios e não envia informações enquanto o canal de recebimento não estiver configurado.</p>
          <p>Antes da publicação com o formulário ativo, substitua este conteúdo por uma política revisada que descreva o controlador dos dados, as finalidades do tratamento, os serviços utilizados, o período de retenção e os canais para exercício de direitos.</p>
          <p className="border-l-2 border-moss pl-4 font-medium text-forest">[REVISAR COM AS INFORMAÇÕES REAIS DO NEGÓCIO ANTES DA PUBLICAÇÃO]</p>
        </div>
        <Link href="/" className="mt-12 inline-flex border border-forest px-5 py-3 text-sm font-medium hover:bg-forest hover:text-natural">Voltar para a Nortea</Link>
      </article>
    </main>
  );
}
