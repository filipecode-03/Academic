import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-forest px-5 text-natural">
      <div className="w-full max-w-3xl border border-natural/20 p-8 sm:p-14">
        <Logo />
        <p className="mt-20 font-display text-sm text-moss">Erro 404</p>
        <h1 className="mt-5 font-display text-5xl font-medium tracking-[-0.05em] sm:text-7xl">Esta rota não leva a uma página.</h1>
        <Link href="/" className="mt-10 inline-flex bg-natural px-6 py-4 text-sm font-semibold text-forest-black">Voltar ao início</Link>
      </div>
    </main>
  );
}
