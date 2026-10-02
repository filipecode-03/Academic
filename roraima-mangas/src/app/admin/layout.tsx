import Link from "next/link";
import AdminLogout from "@/src/components/admin/admin-logout";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Roraima Mangas</h1>
          <p className="text-sm">Painel Administrativo</p>
        </div>

        <nav className="flex flex-col gap-2">
          <Link href="/admin">
            Dashboard
          </Link>

          <Link href="/admin/produtos">
            Produtos
          </Link>

          <Link href="/admin/categorias">
            Categorias
          </Link>

          <Link href="/admin/colecoes">
            Coleções
          </Link>

          <Link href="/admin/banners">
            Banners
          </Link>

          <Link href="/admin/avisos">
            Avisos promocionais
          </Link>

          <Link href="/admin/secoes">
            Seções da Home
          </Link>
        </nav>

        <div className="mt-8">
          <AdminLogout />
        </div>
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}