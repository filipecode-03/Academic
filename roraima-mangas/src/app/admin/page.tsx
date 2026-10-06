import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";

import { authOptions } from "@/src/lib/auth";

const adminLinks = [
  ["Produtos", "/admin/produtos", "Cadastre, ajuste preços e controle o estoque."],
  ["Coleções", "/admin/colecoes", "Monte vitrines temáticas para os clientes."],
  ["Links da Navbar", "/admin/navbar", "Configure os links, dropdowns e destinos exibidos na loja."],
  ["Conteúdo da Home", "/admin/secoes", "Atualize seções, banners e avisos promocionais."],
  ["Atalhos da Home", "/admin/blocos-home", "Crie destaques visuais para as coleções."],
];

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <p className="mt-2 text-neutral-600">
        Olá, {session.user?.name ?? session.user?.email}.
      </p>
      <section className="grid gap-4 sm:grid-cols-2">
        {adminLinks.map(([title, href, description]) => <Link key={href} href={href} className="rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <h2 className="font-semibold">{title}</h2><p className="mt-2 text-sm text-neutral-600">{description}</p>
        </Link>)}
      </section>
    </div>
  );
}
