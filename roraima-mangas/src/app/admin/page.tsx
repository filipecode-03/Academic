import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Boxes, Images, LayoutGrid, Megaphone, Navigation, Package, PanelsTopLeft, Plus } from "lucide-react";

import { AdminPageHeader } from "@/src/components/admin/admin-ui";
import { authOptions } from "@/src/lib/auth";

const adminLinks = [
  { title: "Produtos", href: "/admin/produtos", description: "Cadastre itens, ajuste preços, estoque e exibição.", icon: Package, group: "Catálogo" },
  { title: "Coleções", href: "/admin/colecoes", description: "Organize produtos em vitrines temáticas.", icon: Boxes, group: "Catálogo" },
  { title: "Banners", href: "/admin/banners", description: "Atualize as imagens principais da Home.", icon: Images, group: "Conteúdo" },
  { title: "Avisos", href: "/admin/avisos", description: "Programe mensagens promocionais para a loja.", icon: Megaphone, group: "Conteúdo" },
  { title: "Seções da Home", href: "/admin/secoes", description: "Defina as prateleiras e produtos da página inicial.", icon: PanelsTopLeft, group: "Conteúdo" },
  { title: "Atalhos da Home", href: "/admin/blocos-home", description: "Crie acessos visuais para coleções.", icon: LayoutGrid, group: "Conteúdo" },
  { title: "Navbar", href: "/admin/navbar", description: "Configure links, destinos e submenus.", icon: Navigation, group: "Conteúdo" },
];

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const userName = session.user?.name?.split(" ")[0] ?? session.user?.email ?? "administrador";

  return (
    <div className="admin-page">
      <AdminPageHeader
        eyebrow="Visão geral"
        title={`Olá, ${userName}`}
        description="Acesse rapidamente as áreas usadas para manter o catálogo e o conteúdo da loja atualizados."
        actions={
          <Link href="/admin/produtos" className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-slate-950 px-3 text-sm font-medium text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-slate-400/40">
            <Plus className="size-4" /> Novo produto
          </Link>
        }
      />

      <section aria-labelledby="quick-actions-title" className="space-y-4">
        <div className="admin-section-heading">
          <div><h2 id="quick-actions-title">Atalhos administrativos</h2><p>Escolha uma área para começar.</p></div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {adminLinks.map(({ title, href, description, icon: Icon, group }) => (
            <Link key={href} href={href} className="group flex min-h-36 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-emerald-200 motion-reduce:transform-none">
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-emerald-50 group-hover:text-emerald-700"><Icon className="size-5" /></span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-400">{group}</span>
              </div>
              <h3 className="mt-4 font-heading font-bold text-slate-900">{title}</h3>
              <div className="mt-1 flex items-end gap-3">
                <p className="flex-1 text-sm leading-5 text-slate-500">{description}</p>
                <ArrowRight className="size-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-700" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
