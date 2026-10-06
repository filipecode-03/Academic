"use client";

import { useEffect, useMemo, useState } from "react";

type Product = { id: string; name: string; slug: string };
type Collection = { id: string; name: string };
type SectionProduct = { productId: string; order: number; product: Product };
type Section = {
  id: string;
  title: string;
  type: "MANUAL" | "COLLECTION";
  order: number;
  active: boolean;
  collectionId: string | null;
  collection: Collection | null;
  products: SectionProduct[];
};
type ApiData = {
  message?: string;
  homeSections?: Section[];
  homeSection?: Section;
  products?: Product[];
  collections?: Collection[];
  homeSectionProduct?: SectionProduct;
};
type SectionDraft = {
  title: string;
  type: Section["type"];
  collectionId: string;
  active: boolean;
};

async function readApi<T extends ApiData = ApiData>(response: Response): Promise<T> {
  const data = await response.json() as T;
  if (!response.ok) throw new Error(data.message ?? "A operação não foi concluída.");
  return data;
}

function getErrorMessage(cause: unknown, fallback: string) {
  if (!(cause instanceof Error)) return fallback;
  if (cause instanceof TypeError || cause.message.toLowerCase() === "failed to fetch") return fallback;
  return cause.message;
}

function emptyDraft(): SectionDraft {
  return { title: "", type: "MANUAL", collectionId: "", active: true };
}

export default function HomeSectionsPage() {
  const [sections, setSections] = useState<Section[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [editing, setEditing] = useState<Section | null>(null);
  const [draft, setDraft] = useState<SectionDraft>(emptyDraft());
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [productSearch, setProductSearch] = useState("");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderedIds, setOrderedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function loadData() {
    try {
      setLoading(true);
      setError("");
      const [sectionResponse, productResponse, collectionResponse] = await Promise.all([
        fetch("/api/home-sections"),
        fetch("/api/products"),
        fetch("/api/collections"),
      ]);
      const [sectionData, productData, collectionData] = await Promise.all([
        readApi(sectionResponse), readApi(productResponse), readApi(collectionResponse),
      ]);
      setSections(sectionData.homeSections ?? []);
      setProducts(productData.products ?? []);
      setCollections(collectionData.collections ?? []);
    } catch (cause) {
      console.error("Erro ao carregar seções da Home:", cause);
      setError(getErrorMessage(cause, "Não foi possível carregar as seções da Home."));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void loadData(); }, []);

  const displayedSections = useMemo(() => {
    const ordered = isOrdering
      ? orderedIds.map((id) => sections.find((section) => section.id === id)).filter((section): section is Section => Boolean(section))
      : sections;
    const query = search.trim().toLocaleLowerCase();
    return ordered.filter((section) =>
      `${section.title} ${section.type} ${section.collection?.name ?? ""}`
        .toLocaleLowerCase().includes(query)
    );
  }, [isOrdering, orderedIds, sections, search]);

  const visibleProducts = useMemo(() => {
    const query = productSearch.trim().toLocaleLowerCase();
    return products.filter((product) => `${product.name} ${product.slug}`.toLocaleLowerCase().includes(query));
  }, [productSearch, products]);

  const displayedSelectedProductIds = useMemo(() => {
    if (editing?.type !== "MANUAL") return selectedProductIds;
    const existingIds = [...editing.products]
      .sort((a, b) => a.order - b.order)
      .map(({ productId }) => productId);
    const selected = new Set(selectedProductIds);
    return [
      ...existingIds.filter((id) => selected.has(id)),
      ...selectedProductIds.filter((id) => !existingIds.includes(id)),
    ];
  }, [editing, selectedProductIds]);

  function startCreate() {
    setEditing(null);
    setDraft(emptyDraft());
    setSelectedProductIds([]);
    setProductSearch("");
    setError("");
    setNotice("");
    setShowForm(true);
  }

  function startEdit(section: Section) {
    setEditing(section);
    setDraft({
      title: section.title,
      type: section.type,
      collectionId: section.collectionId ?? "",
      active: section.active,
    });
    setSelectedProductIds([...section.products].sort((a, b) => a.order - b.order).map(({ productId }) => productId));
    setProductSearch("");
    setError("");
    setNotice("");
    setShowForm(true);
  }

  function changeType(type: Section["type"]) {
    setDraft((current) => ({
      ...current,
      type,
      collectionId: type === "COLLECTION" ? current.collectionId : "",
    }));
    if (type !== "MANUAL") setSelectedProductIds([]);
  }

  function toggleProduct(productId: string) {
    setSelectedProductIds((current) => current.includes(productId)
      ? current.filter((id) => id !== productId)
      : current.length >= 10 ? current : [...current, productId]);
  }

  async function saveSection(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = draft.title.trim();
    if (!title) {
      setError("O título da seção é obrigatório.");
      return;
    }
    if (draft.type === "MANUAL" && selectedProductIds.length > 10) { setError("Uma seção pode ter no máximo 10 produtos."); return; }
    if (draft.type === "COLLECTION" && !draft.collectionId) {
      setError("Selecione uma coleção para esta seção.");
      return;
    }

    try {
      setSaving(true);
      setError("");
      const payload = {
        title,
        type: draft.type,
        active: draft.active,
        order: editing?.order ?? sections.length,
        collectionId: draft.type === "COLLECTION" ? draft.collectionId : null,
      };
      const response = await fetch(editing ? `/api/home-sections/${editing.id}` : "/api/home-sections", {
        method: editing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await readApi(response);
      const savedSection = data.homeSection;
      if (!savedSection) throw new Error("A API não retornou a seção salva.");

      if (draft.type === "MANUAL") {
        const existingIds = editing?.type === "MANUAL"
          ? [...editing.products].sort((a, b) => a.order - b.order).map(({ productId }) => productId)
          : [];
        const keepExisting = existingIds.filter((id) => selectedProductIds.includes(id));
        const newIds = displayedSelectedProductIds.filter((id) => !existingIds.includes(id));
        const retainedOrders = (editing?.products ?? [])
          .filter((item) => keepExisting.includes(item.productId))
          .map(({ order }) => order);
        let nextProductOrder = retainedOrders.length > 0 ? Math.max(...retainedOrders) + 1 : 0;
        for (const productId of newIds) {
          await readApi(await fetch(`/api/home-sections/${savedSection.id}/products`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId, order: nextProductOrder++ }),
          }));
        }
        const selectedSet = new Set(selectedProductIds);
        for (const productId of existingIds.filter((id) => !selectedSet.has(id))) {
          await readApi(await fetch(`/api/home-sections/${savedSection.id}/products/${productId}`, { method: "DELETE" }));
        }
      }

      setShowForm(false);
      setEditing(null);
      setNotice(editing ? "Seção atualizada com sucesso." : "Seção criada com sucesso.");
      await loadData();
    } catch (cause) {
      console.error("Erro ao salvar seção da Home:", cause);
      setError(getErrorMessage(cause, "Não foi possível salvar a seção."));
      await loadData();
    } finally {
      setSaving(false);
    }
  }

  async function toggleActive(section: Section) {
    try {
      setError("");
      await readApi(await fetch(`/api/home-sections/${section.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !section.active }),
      }));
      setNotice(`Seção ${section.active ? "desativada" : "ativada"}.`);
      await loadData();
    } catch (cause) {
      console.error("Erro ao alterar status da seção:", cause);
      setError(getErrorMessage(cause, "Não foi possível alterar o status da seção."));
    }
  }

  async function deleteSection(section: Section) {
    if (!window.confirm(`Deseja excluir a seção “${section.title}”?`)) return;
    try {
      setError("");
      await readApi(await fetch(`/api/home-sections/${section.id}`, { method: "DELETE" }));
      setNotice("Seção excluída. A ordem foi reorganizada.");
      await loadData();
    } catch (cause) {
      console.error("Erro ao excluir seção:", cause);
      setError(getErrorMessage(cause, "Não foi possível excluir a seção."));
    }
  }

  function startOrdering() {
    setOrderedIds(sections.map(({ id }) => id));
    setIsOrdering(true);
    setShowForm(false);
    setEditing(null);
    setError("");
    setNotice("");
  }

  function moveSection(id: string, direction: -1 | 1) {
    setOrderedIds((current) => {
      const from = current.indexOf(id);
      const to = from + direction;
      if (from < 0 || to < 0 || to >= current.length) return current;
      const next = [...current];
      [next[from], next[to]] = [next[to], next[from]];
      return next;
    });
  }

  async function saveOrder() {
    try {
      setSaving(true);
      setError("");
      await readApi(await fetch("/api/home-sections/order", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionIds: orderedIds }),
      }));
      setIsOrdering(false);
      setOrderedIds([]);
      setNotice("Ordem das seções atualizada.");
      await loadData();
    } catch (cause) {
      console.error("Erro ao salvar a ordem das seções:", cause);
      setError(getErrorMessage(cause, "Não foi possível salvar a ordem das seções."));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Seções da Home</h1>
          <p>Gerencie as seções de produtos exibidas na página inicial.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {!isOrdering && <button type="button" onClick={showForm ? () => setShowForm(false) : startCreate}>
            {showForm ? "Fechar formulário" : "Nova seção"}
          </button>}
          {!isOrdering ? <button type="button" disabled={sections.length < 2} onClick={startOrdering}>Alterar ordem</button> : <>
            <button type="button" onClick={() => { setIsOrdering(false); setOrderedIds([]); setError(""); }}>Cancelar</button>
            <button type="button" disabled={saving} onClick={() => void saveOrder()}>{saving ? "Salvando ordem..." : "Concluir alteração"}</button>
          </>}
        </div>
      </header>

      <div className="flex flex-wrap items-center gap-2">
        <input type="search" className="w-full max-w-md border p-2" placeholder="Pesquisar seções..." aria-label="Pesquisar seções por título, tipo ou origem" value={search} onChange={(event) => setSearch(event.target.value)} />
        {search && <button type="button" onClick={() => setSearch("")}>Limpar pesquisa</button>}
      </div>

      {error && <p role="alert" className="text-red-700">{error}</p>}
      {notice && <p role="status">{notice}</p>}

      {showForm && <form className="space-y-4 border p-4" onSubmit={(event) => void saveSection(event)}>
        <h2 className="text-xl font-semibold">{editing ? "Editar seção" : "Nova seção"}</h2>
        <div>
          <label className="mb-1 block" htmlFor="section-title">Título</label>
          <input id="section-title" className="w-full max-w-xl border p-2" required value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} />
        </div>
        <div>
          <label className="mb-1 block" htmlFor="section-type">Tipo da seção</label>
          <select id="section-type" className="border p-2" value={draft.type} onChange={(event) => changeType(event.target.value as Section["type"])}>
            <option value="MANUAL">Manual</option><option value="COLLECTION">Coleção</option>
          </select>
        </div>
        {draft.type === "COLLECTION" && <div>
          <label className="mb-1 block" htmlFor="section-collection">Coleção</label>
          <select id="section-collection" className="w-full max-w-xl border p-2" required value={draft.collectionId} onChange={(event) => setDraft({ ...draft, collectionId: event.target.value })}>
            <option value="">Selecione uma coleção</option>{collections.map((collection) => <option key={collection.id} value={collection.id}>{collection.name}</option>)}
          </select>
        </div>}
        {draft.type === "MANUAL" && <fieldset className="space-y-3">
          <legend className="font-semibold">Produtos da seção</legend>
          <p className="text-sm">Selecionados: {selectedProductIds.length}/10. Produtos existentes mantêm a ordem salva; novas seleções são adicionadas ao final.</p>
          <input type="search" className="w-full max-w-md border p-2" placeholder="Pesquisar produto..." aria-label="Pesquisar produtos" value={productSearch} onChange={(event) => setProductSearch(event.target.value)} />
          <div className="max-h-64 space-y-1 overflow-auto border p-3">
            {visibleProducts.length === 0 ? <p>Nenhum produto encontrado.</p> : visibleProducts.map((product) => <label key={product.id} className="flex items-center gap-2">
              <input type="checkbox" checked={selectedProductIds.includes(product.id)} disabled={selectedProductIds.length >= 10 && !selectedProductIds.includes(product.id)} onChange={() => toggleProduct(product.id)} />
              <span>{product.name}</span>
            </label>)}
          </div>
          {selectedProductIds.length > 0 && <ol className="list-decimal space-y-1 pl-6">
            {displayedSelectedProductIds.map((id) => {
              const product = products.find((item) => item.id === id);
              if (!product) return null;
              return <li key={id} className="flex items-center gap-3"><span>{product.name}</span><button type="button" onClick={() => toggleProduct(id)}>Remover</button></li>;
            })}
          </ol>}
        </fieldset>}
        <label className="flex items-center gap-2"><input type="checkbox" checked={draft.active} onChange={(event) => setDraft({ ...draft, active: event.target.checked })} /> Ativa</label>
        <div className="flex gap-3"><button type="submit" disabled={saving}>{saving ? "Salvando..." : "Salvar seção"}</button><button type="button" disabled={saving} onClick={() => setShowForm(false)}>Cancelar</button></div>
      </form>}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Seções cadastradas</h2>
        {loading && <p>Carregando seções...</p>}
        {!loading && sections.length === 0 && !error && <p>Nenhuma seção cadastrada.</p>}
        {!loading && sections.length > 0 && displayedSections.length === 0 && <p>Nenhuma seção encontrada para “{search}”.</p>}
        {!loading && displayedSections.map((section) => {
          const sectionIndex = isOrdering ? orderedIds.indexOf(section.id) : sections.findIndex((item) => item.id === section.id);
          const typeLabel = section.type === "MANUAL" ? "Manual" : "Coleção";
          const source = section.type === "COLLECTION" ? section.collection?.name ?? "Coleção indisponível" : `${section.products.length} produto(s)`;
          return <article key={section.id} className="flex flex-wrap items-center justify-between gap-4 border p-4">
            <div>
              <h3 className="font-semibold">{section.title}</h3>
              <p>Ordem: {sectionIndex + 1} · Tipo: {typeLabel} · Origem: {source}</p>
              <p>Status: {section.active ? "Ativa" : "Inativa"}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {isOrdering ? <div className="flex gap-2" aria-label={`Mover ${section.title}`}>
                <button type="button" aria-label={`Mover ${section.title} para cima`} disabled={sectionIndex === 0} onClick={() => moveSection(section.id, -1)}>↑</button>
                <button type="button" aria-label={`Mover ${section.title} para baixo`} disabled={sectionIndex === orderedIds.length - 1} onClick={() => moveSection(section.id, 1)}>↓</button>
              </div> : <>
                <button type="button" onClick={() => startEdit(section)}>Editar</button>
                <button type="button" onClick={() => void toggleActive(section)}>{section.active ? "Desativar" : "Ativar"}</button>
                <button type="button" onClick={() => void deleteSection(section)}>Excluir</button>
              </>}
            </div>
          </article>;
        })}
      </section>
    </div>
  );
}
