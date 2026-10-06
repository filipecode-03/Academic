"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, Plus, X } from "lucide-react";
import { Button } from "@/src/components/ui/button";

type DestinationType = "COLLECTION" | "ALL_PRODUCTS" | "NEW_PRODUCTS" | "FEATURED_PRODUCTS" | "EXTERNAL";
type Collection = { id: string; name: string };
type Item = {
  id: string; title: string; type: "LINK" | "DROPDOWN"; destinationType: DestinationType | null;
  collectionId: string | null; externalUrl: string | null; order: number; active: boolean;
  collection?: Collection | null; children?: Item[];
};
type Draft = { title: string; type: "LINK" | "DROPDOWN"; destinationType: DestinationType; collectionId: string; externalUrl: string; active: boolean };
type ApiData = { items?: Item[]; item?: Item; collections?: Collection[]; message?: string };
const blankDraft: Draft = { title: "", type: "LINK", destinationType: "ALL_PRODUCTS", collectionId: "", externalUrl: "", active: true };

async function readJson(response: Response): Promise<ApiData> {
  const data = await response.json() as ApiData;
  if (!response.ok) throw new Error(data.message ?? "Não foi possível concluir a operação.");
  return data;
}

function fromItem(item: Item): Draft {
  return { title: item.title, type: item.type, destinationType: item.destinationType ?? "ALL_PRODUCTS", collectionId: item.collectionId ?? "", externalUrl: item.externalUrl ?? "", active: item.active };
}

function destinationLabel(item: Item, collections: Collection[]) {
  if (item.type === "DROPDOWN") return `${item.children?.length ?? 0} links filhos`;
  if (item.destinationType === "COLLECTION") return collections.find(({ id }) => id === item.collectionId)?.name ?? "Coleção removida";
  if (item.destinationType === "ALL_PRODUCTS") return "Todos os produtos";
  if (item.destinationType === "NEW_PRODUCTS") return "Lançamentos";
  if (item.destinationType === "FEATURED_PRODUCTS") return "Destaques";
  return item.externalUrl ?? "URL externa";
}

export default function NavbarAdminPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [rootEditor, setRootEditor] = useState<{ id: string | null; draft: Draft } | null>(null);
  const [childEditor, setChildEditor] = useState<{ parentId: string; id: string | null; draft: Draft } | null>(null);

  async function loadData() {
    try {
      setLoading(true); setError("");
      const [navbarData, collectionData] = await Promise.all([readJson(await fetch("/api/navbar-items")), readJson(await fetch("/api/collections"))]);
      setItems(navbarData.items ?? []); setCollections(collectionData.collections ?? []);
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Não foi possível carregar os links."); }
    finally { setLoading(false); }
  }

  useEffect(() => { void loadData(); }, []);

  function payload(draft: Draft, order: number, child = false) {
    return {
      title: draft.title,
      type: child ? "LINK" : draft.type,
      active: draft.active,
      order,
      destinationType: draft.type === "DROPDOWN" && !child ? null : draft.destinationType,
      collectionId: !(draft.type === "DROPDOWN" && !child) && draft.destinationType === "COLLECTION" ? draft.collectionId : null,
      externalUrl: !(draft.type === "DROPDOWN" && !child) && draft.destinationType === "EXTERNAL" ? draft.externalUrl : null,
    };
  }

  async function saveRoot(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (!rootEditor) return;
    try {
      setSaving(true); setError("");
      const body = payload(rootEditor.draft, rootEditor.id ? (items.find(({ id }) => id === rootEditor.id)?.order ?? 0) : items.length);
      await readJson(await fetch(rootEditor.id ? `/api/navbar-items/${rootEditor.id}` : "/api/navbar-items", { method: rootEditor.id ? "PATCH" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }));
      setRootEditor(null); setNotice("Item da Navbar salvo."); await loadData();
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Não foi possível salvar o item."); }
    finally { setSaving(false); }
  }

  async function saveChild(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (!childEditor) return;
    try {
      setSaving(true); setError("");
      const parent = items.find(({ id }) => id === childEditor.parentId);
      const currentOrder = parent?.children?.find(({ id }) => id === childEditor.id)?.order ?? parent?.children?.length ?? 0;
      const endpoint = childEditor.id ? `/api/navbar-items/${childEditor.parentId}/children/${childEditor.id}` : `/api/navbar-items/${childEditor.parentId}/children`;
      await readJson(await fetch(endpoint, { method: childEditor.id ? "PATCH" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload({ ...childEditor.draft, type: "LINK" }, currentOrder, true)) }));
      setChildEditor(null); setNotice("Link do submenu salvo."); await loadData();
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Não foi possível salvar o link."); }
    finally { setSaving(false); }
  }

  async function moveItems(parentId: string | null, ordered: Item[], index: number, direction: -1 | 1) {
    const target = index + direction; if (target < 0 || target >= ordered.length) return;
    const ids = ordered.map(({ id }) => id); [ids[index], ids[target]] = [ids[target], ids[index]];
    const url = parentId ? `/api/navbar-items/${parentId}/children` : "/api/navbar-items/order";
    try { await readJson(await fetch(url, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ itemIds: ids }) })); await loadData(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Não foi possível ordenar os itens."); }
  }

  async function toggleActive(item: Item, parentId?: string) {
    const endpoint = parentId ? `/api/navbar-items/${parentId}/children/${item.id}` : `/api/navbar-items/${item.id}`;
    try { await readJson(await fetch(endpoint, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !item.active }) })); await loadData(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Não foi possível atualizar o status."); }
  }

  async function removeItem(item: Item, parentId?: string) {
    if (!window.confirm(parentId ? "Remover este link do submenu?" : "Remover este item da Navbar?")) return;
    const endpoint = parentId ? `/api/navbar-items/${parentId}/children/${item.id}` : `/api/navbar-items/${item.id}`;
    try { await readJson(await fetch(endpoint, { method: "DELETE" })); setNotice("Item removido."); await loadData(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Não foi possível remover o item."); }
  }

  function DestinationFields({ draft, onChange }: { draft: Draft; onChange: (draft: Draft) => void }) {
    if (draft.type === "DROPDOWN") return <p className="text-sm text-neutral-500">Os links de destino serão adicionados como itens filhos.</p>;
    return <>
      <label className="block space-y-1 text-sm font-medium">Destino<select className="w-full" value={draft.destinationType} onChange={(event) => onChange({ ...draft, destinationType: event.target.value as DestinationType, collectionId: "", externalUrl: "" })}>
        <option value="COLLECTION">Coleção</option><option value="ALL_PRODUCTS">Todos os produtos</option><option value="NEW_PRODUCTS">Lançamentos</option><option value="FEATURED_PRODUCTS">Destaques</option><option value="EXTERNAL">URL externa</option>
      </select></label>
      {draft.destinationType === "COLLECTION" && <label className="block space-y-1 text-sm font-medium">Coleção<select required className="w-full" value={draft.collectionId} onChange={(event) => onChange({ ...draft, collectionId: event.target.value })}><option value="">Selecione uma coleção</option>{collections.map((collection) => <option key={collection.id} value={collection.id}>{collection.name}</option>)}</select></label>}
      {draft.destinationType === "EXTERNAL" && <label className="block space-y-1 text-sm font-medium">URL externa<input required type="url" placeholder="https://instagram.com/..." className="w-full" value={draft.externalUrl} onChange={(event) => onChange({ ...draft, externalUrl: event.target.value })} /></label>}
    </>;
  }

  function EditorForm({ value, onChange, onSubmit, onCancel, child = false }: { value: Draft; onChange: (draft: Draft) => void; onSubmit: (event: React.FormEvent<HTMLFormElement>) => void; onCancel: () => void; child?: boolean }) {
    return <form onSubmit={onSubmit} className="space-y-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4 shadow-none">
      <label className="block space-y-1 text-sm font-medium">Título<input required maxLength={60} className="w-full" value={value.title} onChange={(event) => onChange({ ...value, title: event.target.value })} /></label>
      {!child && <label className="block space-y-1 text-sm font-medium">Tipo<select className="w-full" value={value.type} onChange={(event) => onChange({ ...value, type: event.target.value as Draft["type"] })}><option value="LINK">Link simples</option><option value="DROPDOWN">Dropdown</option></select></label>}
      {DestinationFields({ draft: value, onChange })}
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={value.active} onChange={(event) => onChange({ ...value, active: event.target.checked })} />Ativo na Navbar</label>
      <div className="flex gap-2"><Button type="submit" disabled={saving}>{saving ? "Salvando…" : "Salvar"}</Button><Button type="button" variant="outline" onClick={onCancel}>Cancelar</Button></div>
    </form>;
  }

  return <div className="mx-auto max-w-4xl space-y-6">
    <header className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Loja</p><h1 className="mt-1 text-2xl font-bold">Links da Navbar</h1><p className="mt-1 max-w-2xl text-sm text-neutral-600">Gerencie os títulos, destinos, submenus e a ordem. A apresentação visual permanece padronizada no site.</p></div><Button type="button" onClick={() => { setError(""); setRootEditor({ id: null, draft: { ...blankDraft } }); }}><Plus className="size-4" />Novo item</Button></header>
    {error && <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">{error}</p>}{notice && <p role="status" className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800">{notice}</p>}
    {rootEditor && <section className="space-y-3 rounded-2xl border bg-white p-5 shadow-sm"><h2 className="font-semibold">{rootEditor.id ? "Editar item" : "Novo item"}</h2>{EditorForm({ value: rootEditor.draft, onChange: (draft) => setRootEditor((current) => current && { ...current, draft }), onSubmit: saveRoot, onCancel: () => setRootEditor(null) })}</section>}
    {childEditor && <section className="space-y-3 rounded-2xl border bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><h2 className="font-semibold">{childEditor.id ? "Editar link filho" : "Novo link filho"}</h2><Button type="button" variant="ghost" size="icon" aria-label="Fechar formulário" onClick={() => setChildEditor(null)}><X /></Button></div>{EditorForm({ child: true, value: childEditor.draft, onChange: (draft) => setChildEditor((current) => current && { ...current, draft }), onSubmit: saveChild, onCancel: () => setChildEditor(null) })}</section>}
    {loading ? <p className="py-8 text-center text-neutral-500">Carregando links…</p> : items.length === 0 ? <p className="rounded-xl border border-dashed bg-white p-8 text-center text-sm text-neutral-500">Nenhum item configurado. Crie links simples ou dropdowns para exibir na Navbar.</p> : <ol className="space-y-3">{items.map((item, index) => <li key={item.id} className="rounded-2xl border bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3"><div className="flex min-w-0 items-start gap-3"><span className="mt-1 rounded-lg bg-neutral-100 p-2 text-neutral-500"><span className="sr-only">Posição {index + 1}</span>☰</span><div className="min-w-0"><h2 className="font-semibold">{item.title}<span className="ml-2 rounded-full bg-neutral-100 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-neutral-500">{item.type === "DROPDOWN" ? "Dropdown" : "Link"}</span></h2><p className="mt-1 break-all text-sm text-neutral-500">{destinationLabel(item, collections)}</p></div></div><div className="flex flex-wrap items-center gap-1">
        <Button type="button" variant="ghost" size="icon-sm" aria-label="Mover para cima" disabled={index === 0} onClick={() => void moveItems(null, items, index, -1)}><ArrowUp /></Button><Button type="button" variant="ghost" size="icon-sm" aria-label="Mover para baixo" disabled={index === items.length - 1} onClick={() => void moveItems(null, items, index, 1)}><ArrowDown /></Button>
        <Button type="button" variant="outline" size="sm" onClick={() => setRootEditor({ id: item.id, draft: fromItem(item) })}>Editar</Button><Button type="button" variant="outline" size="sm" onClick={() => void toggleActive(item)}>{item.active ? "Desativar" : "Ativar"}</Button><Button type="button" variant="destructive" size="sm" onClick={() => void removeItem(item)}>Excluir</Button>
      </div></div>
      {item.type === "DROPDOWN" && <div className="mt-4 space-y-3 border-l-2 border-neutral-100 pl-4 sm:ml-3 sm:pl-5">
        <div className="flex flex-wrap items-center justify-between gap-2"><h3 className="text-sm font-semibold text-neutral-700">Itens filhos</h3><Button type="button" variant="outline" size="sm" onClick={() => setChildEditor({ parentId: item.id, id: null, draft: { ...blankDraft, type: "LINK" } })}><Plus className="size-4" />Adicionar link</Button></div>
        {(item.children ?? []).length === 0 ? <p className="text-sm text-neutral-500">Este dropdown ainda não tem links.</p> : <ul className="space-y-2">{item.children!.map((child, childIndex) => <li key={child.id} className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-neutral-50 px-3 py-2.5"><div className="min-w-0"><p className="text-sm font-medium">{child.title}{!child.active && <span className="ml-2 text-xs text-neutral-400">Inativo</span>}</p><p className="break-all text-xs text-neutral-500">{destinationLabel(child, collections)}</p></div><div className="flex items-center gap-1"><Button type="button" variant="ghost" size="icon-sm" aria-label="Mover filho para cima" disabled={childIndex === 0} onClick={() => void moveItems(item.id, item.children ?? [], childIndex, -1)}><ArrowUp /></Button><Button type="button" variant="ghost" size="icon-sm" aria-label="Mover filho para baixo" disabled={childIndex === item.children!.length - 1} onClick={() => void moveItems(item.id, item.children ?? [], childIndex, 1)}><ArrowDown /></Button><Button type="button" variant="outline" size="sm" onClick={() => setChildEditor({ parentId: item.id, id: child.id, draft: fromItem(child) })}>Editar</Button><Button type="button" variant="outline" size="sm" onClick={() => void toggleActive(child, item.id)}>{child.active ? "Desativar" : "Ativar"}</Button><Button type="button" variant="destructive" size="sm" onClick={() => void removeItem(child, item.id)}>Excluir</Button></div></li>)}</ul>}
      </div>}
    </li>)}</ol>}
  </div>;
}
