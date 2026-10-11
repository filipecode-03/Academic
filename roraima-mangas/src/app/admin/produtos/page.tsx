"use client";

import { useEffect, useState } from "react";
import { Edit3, ImageIcon, Package, Plus, Trash2 } from "lucide-react";

import ProductForm, { type ProductFormInitialData } from "@/src/components/admin/products/product-form";
import AdminConfirmDialog from "@/src/components/admin/admin-confirm-dialog";
import { AdminEmptyState, AdminFeedback, AdminPageHeader, AdminSearch, AdminSkeletonList, AdminStatusBadge } from "@/src/components/admin/admin-ui";
import { Button } from "@/src/components/ui/button";

type ProductImage = { id: string; image: string; order: number };
type Product = {
  id: string; name: string; slug: string; price: number | string;
  status: "ACTIVE" | "INACTIVE"; stock: number; featured: boolean;
  newUntil?: string | null; featuredStartAt?: string | null; featuredEndAt?: string | null;
  images: ProductImage[];
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductFormInitialData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);

  async function loadProducts() {
    try {
      setLoading(true); setError("");
      const response = await fetch("/api/products");
      const data = await response.json();
      if (!response.ok) throw new Error(data.message ?? "Não foi possível carregar os produtos.");
      setProducts(data.products);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Erro ao carregar produtos.");
    } finally { setLoading(false); }
  }

  useEffect(() => { void loadProducts(); }, []);

  const normalizedSearch = search.trim().toLocaleLowerCase();
  const filteredProducts = products.filter((product) => product.name.toLocaleLowerCase().includes(normalizedSearch));

  async function handleEdit(id: string) {
    try {
      setError(""); setNotice("");
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.message ?? "Não foi possível carregar o produto.");
      setEditingProduct(data.product); setShowForm(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Não foi possível carregar o produto.");
    }
  }

  async function handleDelete(id: string) {
    try {
      setError(""); setNotice("");
      const response = await fetch(`/api/products/${id}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message ?? "Não foi possível excluir o produto.");
      setNotice("Produto excluído com sucesso.");
      setDeleteTarget(null);
      await loadProducts();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Não foi possível excluir o produto.");
    }
  }

  function closeForm() { setEditingProduct(null); setShowForm(false); }
  function startNewProduct() { setEditingProduct(null); setError(""); setNotice(""); setShowForm(true); }
  function handleProductSaved() { closeForm(); setNotice(editingProduct ? "Produto atualizado com sucesso." : "Produto cadastrado com sucesso."); void loadProducts(); }

  return (
    <div className="admin-page">
      <AdminPageHeader
        eyebrow="Catálogo"
        title="Produtos"
        description="Gerencie informações, preços, estoque, imagens e exibição dos produtos na loja."
        actions={<Button size="lg" onClick={showForm ? closeForm : startNewProduct}>{showForm ? "Fechar formulário" : <><Plus className="size-4" /> Novo produto</>}</Button>}
      />

      {error && <AdminFeedback type="error">{error}</AdminFeedback>}
      {notice && <AdminFeedback type="success">{notice}</AdminFeedback>}

      {showForm && (
        <section className="space-y-4" aria-labelledby="product-form-title">
          <div className="admin-section-heading"><div><h2 id="product-form-title">{editingProduct ? "Editar produto" : "Novo produto"}</h2><p>Preencha os campos abaixo e salve para atualizar o catálogo.</p></div></div>
          <ProductForm product={editingProduct ?? undefined} onSuccess={handleProductSaved} />
        </section>
      )}

      <section className="space-y-4" aria-labelledby="products-list-title">
        <div className="admin-toolbar">
          <div className="admin-section-heading"><div><h2 id="products-list-title">Produtos cadastrados</h2><p>{products.length} {products.length === 1 ? "produto" : "produtos"} no catálogo</p></div></div>
          <AdminSearch value={search} onChange={setSearch} placeholder="Pesquisar produtos..." label="Pesquisar produtos pelo nome" />
        </div>

        {loading && <AdminSkeletonList rows={4} />}
        {!loading && error && <AdminEmptyState title="Não foi possível carregar os produtos" description="Verifique sua conexão e tente novamente." action={<Button variant="outline" onClick={() => void loadProducts()}>Tentar novamente</Button>} />}
        {!loading && !error && products.length === 0 && <AdminEmptyState icon={Package} title="Nenhum produto cadastrado" description="Cadastre o primeiro produto para começar a montar o catálogo." action={<Button onClick={startNewProduct}><Plus /> Cadastrar produto</Button>} />}
        {!loading && !error && products.length > 0 && filteredProducts.length === 0 && <AdminEmptyState title="Nenhum resultado" description={`Nenhum produto corresponde à busca “${search}”.`} action={<Button variant="outline" onClick={() => setSearch("")}>Limpar pesquisa</Button>} />}

        {!loading && filteredProducts.length > 0 && (
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="hidden grid-cols-[minmax(0,2fr)_7rem_7rem_8rem] gap-4 border-b bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 md:grid">
              <span>Produto</span><span>Preço</span><span>Estoque</span><span className="text-right">Ações</span>
            </div>
            <div className="divide-y divide-slate-100">
              {filteredProducts.map((product) => (
                <article key={product.id} className="grid gap-4 p-4 transition hover:bg-slate-50/70 md:grid-cols-[minmax(0,2fr)_7rem_7rem_8rem] md:items-center md:px-5">
                  <div className="flex min-w-0 items-center gap-3">
                    {product.images[0] ? <img src={product.images[0].image} alt="" className="size-14 shrink-0 rounded-lg border border-slate-200 object-cover" /> : <span className="grid size-14 shrink-0 place-items-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-slate-400"><ImageIcon className="size-5" /></span>}
                    <div className="min-w-0"><h3 className="truncate font-semibold text-slate-900">{product.name}</h3><div className="mt-1 flex flex-wrap gap-1.5"><AdminStatusBadge active={product.status === "ACTIVE"} />{product.featured && <span className="admin-badge admin-badge-warning">Destaque</span>}{product.stock === 0 && <span className="admin-badge bg-red-50 text-red-700 ring-1 ring-inset ring-red-200">Sem estoque</span>}</div></div>
                  </div>
                  <div><span className="mr-2 text-xs font-medium text-slate-400 md:hidden">Preço</span><span className="text-sm font-semibold text-slate-800">{Number(product.price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span></div>
                  <div><span className="mr-2 text-xs font-medium text-slate-400 md:hidden">Estoque</span><span className="text-sm text-slate-700">{product.stock} un.</span></div>
                  <div className="admin-actions md:justify-end"><Button variant="outline" size="icon" aria-label={`Editar ${product.name}`} title="Editar" onClick={() => void handleEdit(product.id)}><Edit3 /></Button><Button variant="destructive" size="icon" aria-label={`Excluir ${product.name}`} title="Excluir" onClick={() => setDeleteTarget(product)}><Trash2 /></Button></div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
      <AdminConfirmDialog open={Boolean(deleteTarget)} title="Excluir produto?" description={deleteTarget ? `“${deleteTarget.name}” será removido permanentemente do catálogo.` : ""} onCancel={() => setDeleteTarget(null)} onConfirm={() => handleDelete(deleteTarget!.id)} />
    </div>
  );
}
