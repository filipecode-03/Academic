import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Images,
  LayoutGrid,
  Megaphone,
  Navigation,
  Package,
  PanelsTopLeft,
  Plus,
} from "lucide-react";

import { AdminPageHeader } from "@/src/components/admin/admin-ui";
import { Button } from "@/src/components/ui/button";
import { authOptions } from "@/src/lib/auth";

const adminLinks = [
  {
    title: "Produtos",
    href: "/admin/produtos",
    description: "Cadastre itens, ajuste preços, estoque e exibição.",
    icon: Package,
    group: "Catálogo",
  },
  {
    title: "Coleções",
    href: "/admin/colecoes",
    description: "Organize produtos em vitrines temáticas.",
    icon: Boxes,
    group: "Catálogo",
  },
  {
    title: "Banners",
    href: "/admin/banners",
    description: "Atualize as imagens principais da Home.",
    icon: Images,
    group: "Conteúdo",
  },
  {
    title: "Avisos",
    href: "/admin/avisos",
    description: "Programe mensagens promocionais para a loja.",
    icon: Megaphone,
    group: "Conteúdo",
  },
  {
    title: "Seções da Home",
    href: "/admin/secoes",
    description: "Defina as prateleiras e produtos da página inicial.",
    icon: PanelsTopLeft,
    group: "Conteúdo",
  },
  {
    title: "Atalhos da Home",
    href: "/admin/blocos-home",
    description: "Crie acessos visuais para coleções.",
    icon: LayoutGrid,
    group: "Conteúdo",
  },
  {
    title: "Navbar",
    href: "/admin/navbar",
    description: "Configure links, destinos e submenus.",
    icon: Navigation,
    group: "Conteúdo",
  },
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
          <Button render={<Link href="/admin/produtos" />} nativeButton={false} size="lg">
            <Plus aria-hidden="true" /> Novo produto
          </Button>
        }
      />

      <section aria-labelledby="quick-actions-title" className="space-y-4">
        <div className="admin-section-heading">
          <div>
            <h2 id="quick-actions-title">Atalhos administrativos</h2>
            <p>Escolha uma área para começar.</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {adminLinks.map(({ title, href, description, icon: Icon, group }) => (
            <Link
              key={href}
              href={href}
              className="group flex min-h-36 flex-col rounded-xl border border-border bg-card p-5 text-card-foreground shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-secondary hover:shadow-md focus-visible:ring-3 focus-visible:ring-brand/40 focus-visible:outline-none motion-reduce:transform-none"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-muted text-muted-foreground transition-colors group-hover:bg-brand/20 group-hover:text-brand-deep dark:group-hover:text-brand">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="text-[0.65rem] font-bold tracking-[0.14em] text-muted-foreground uppercase">
                  {group}
                </span>
              </div>
              <h3 className="mt-4 font-heading font-bold text-foreground">{title}</h3>
              <div className="mt-1 flex items-end gap-3">
                <p className="flex-1 text-sm leading-5 text-muted-foreground">{description}</p>
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted-foreground transition-[color,transform] group-hover:translate-x-0.5 group-hover:text-brand-accent"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
