import Link from "next/link";
import AdminLogout from "@/src/components/admin/admin-logout";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50 lg:flex">
      <aside className="border-b bg-white p-4 lg:min-h-screen lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r lg:p-5">
        <div className="mb-5 lg:mb-8">
          <h1 className="text-xl font-bold">Roraima Mangas</h1>
          <p className="text-sm">Painel Administrativo</p>
        </div>

        <nav className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:flex lg:flex-col">
          <Link className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100" href="/admin">
            Dashboard
          </Link>

          <Link className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100" href="/admin/produtos">
            Produtos
          </Link>


          <Link className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100" href="/admin/colecoes">
            Coleções
          </Link>

          <Link className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100" href="/admin/navbar">
            Navbar
          </Link>

          <Link className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100" href="/admin/banners">
            Banners
          </Link>

          <Link className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100" href="/admin/avisos">
            Avisos promocionais
          </Link>

          <Link className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100" href="/admin/secoes">
            Seções da Home
          </Link>
          <Link className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100" href="/admin/blocos-home">
            Atalhos da Home
          </Link>
        </nav>

        <div className="mt-4 lg:mt-8">
          <AdminLogout />
        </div>
      </aside>

      <main data-admin className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}
