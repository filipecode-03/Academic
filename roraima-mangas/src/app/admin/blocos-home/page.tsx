"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ImagePlus } from "lucide-react";
import { Button } from "@/src/components/ui/button";

type Collection = { id: string; name: string };
type Block = { id: string; title: string; image: string; collectionId: string; order: number; active: boolean; collection: { id: string; name: string; slug: string } };
type ApiData = { message?: string; blocks?: Block[]; collections?: Collection[]; block?: Block; uploadUrl?: string; publicUrl?: string };

async function read(response: Response) { const data = await response.json() as ApiData; if (!response.ok) throw new Error(data.message ?? "A operação não foi concluída."); return data; }

export default function HomeCollectionBlocksPage() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [title, setTitle] = useState("");
  const [collectionId, setCollectionId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File>();
  const [preview, setPreview] = useState("");
  const [active, setActive] = useState(true);
  const [editingId, setEditingId] = useState("");
  const [orderedIds, setOrderedIds] = useState<string[]>([]);
  const [ordering, setOrdering] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function load() {
    try { setLoading(true); const [blockData, collectionData] = await Promise.all([read(await fetch("/api/home-collection-blocks")), read(await fetch("/api/collections"))]); setBlocks(blockData.blocks ?? []); setCollections(collectionData.collections ?? []); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Não foi possível carregar os blocos."); }
    finally { setLoading(false); }
  }
  useEffect(() => { void load(); }, []);
  useEffect(() => { if (!imageFile) { setPreview(""); return; } const url = URL.createObjectURL(imageFile); setPreview(url); return () => URL.revokeObjectURL(url); }, [imageFile]);

  const displayed = useMemo(() => ordering ? orderedIds.map((id) => blocks.find((block) => block.id === id)).filter((item): item is Block => Boolean(item)) : blocks, [blocks, ordering, orderedIds]);
  function resetForm() { setTitle(""); setCollectionId(""); setImageUrl(""); setImageFile(undefined); setActive(true); setEditingId(""); }
  function edit(block: Block) { setEditingId(block.id); setTitle(block.title); setCollectionId(block.collectionId); setImageUrl(block.image); setImageFile(undefined); setActive(block.active); setError(""); setNotice(""); }

  async function upload(file: File) {
    const prepared = await read(await fetch("/api/uploads/image", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ fileName: file.name, contentType: file.type, folder: "home-collection-blocks" }) }));
    if (!prepared.uploadUrl || !prepared.publicUrl) throw new Error("Não foi possível preparar o upload da imagem.");
    const response = await fetch(prepared.uploadUrl, { method: "PUT", headers: { "Content-Type": file.type }, body: file });
    if (!response.ok) throw new Error("Não foi possível enviar a imagem para o armazenamento.");
    return prepared.publicUrl;
  }

  async function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!collectionId) { setError("Selecione uma coleção de destino."); return; }
    try {
      setSaving(true); setError("");
      const nextImage = imageFile ? await upload(imageFile) : imageUrl;
      if (!nextImage) throw new Error("Selecione uma imagem.");
      await read(await fetch(editingId ? `/api/home-collection-blocks/${editingId}` : "/api/home-collection-blocks", { method: editingId ? "PATCH" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title, collectionId, image: nextImage, active }) }));
      resetForm(); setNotice(editingId ? "Bloco atualizado." : "Bloco criado."); await load();
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Não foi possível salvar o bloco."); }
    finally { setSaving(false); }
  }

  async function remove(block: Block) {
    if (!window.confirm(`Excluir o atalho “${block.title}”?`)) return;
    try { setError(""); await read(await fetch(`/api/home-collection-blocks/${block.id}`, { method: "DELETE" })); setNotice("Bloco excluído."); await load(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Não foi possível excluir o bloco."); }
  }
  async function toggle(block: Block) {
    try { await read(await fetch(`/api/home-collection-blocks/${block.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !block.active }) })); await load(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Não foi possível atualizar o bloco."); }
  }
  function move(id: string, direction: -1 | 1) { setOrderedIds((current) => { const from = current.indexOf(id); const to = from + direction; if (to < 0 || to >= current.length) return current; const next = [...current]; [next[from], next[to]] = [next[to], next[from]]; return next; }); }
  async function saveOrder() {
    try { setSaving(true); await read(await fetch("/api/home-collection-blocks/order", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ blockIds: orderedIds }) })); setOrdering(false); setNotice("Ordem atualizada."); await load(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Não foi possível salvar a ordem."); }
    finally { setSaving(false); }
  }

  return <div className="mx-auto max-w-5xl space-y-6">
    <header className="flex flex-wrap items-center justify-between gap-3"><div><h1 className="text-2xl font-bold">Atalhos visuais da Home</h1><p className="text-neutral-600">Crie cards que levam os clientes diretamente às coleções.</p></div><div className="flex gap-2"><Button variant="outline" disabled={blocks.length < 2 || saving} onClick={() => { setOrdering((value) => !value); setOrderedIds(blocks.map(({ id }) => id)); }}>{ordering ? "Cancelar ordem" : "Alterar ordem"}</Button>{ordering && <Button disabled={saving} onClick={() => void saveOrder()}>Salvar ordem</Button>}</div></header>
    {error && <p role="alert" className="rounded-md bg-red-50 p-3 text-sm text-red-800">{error}</p>}{notice && <p role="status" className="rounded-md bg-green-50 p-3 text-sm text-green-800">{notice}</p>}
    <form onSubmit={(event) => void save(event)} className="space-y-4 rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="font-semibold">{editingId ? "Editar atalho" : "Novo atalho"}</h2>
      <div className="grid gap-4 sm:grid-cols-2"><label className="space-y-1 text-sm font-medium">Título<input className="w-full" maxLength={80} required value={title} onChange={(event) => setTitle(event.target.value)} /></label><label className="space-y-1 text-sm font-medium">Coleção de destino<select className="w-full" required value={collectionId} onChange={(event) => setCollectionId(event.target.value)}><option value="">Selecione uma coleção</option>{collections.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label></div>
      <div className="space-y-2"><label className="flex items-center gap-2 text-sm font-medium" htmlFor="home-block-image"><ImagePlus className="size-4" />Imagem do atalho</label>{(preview || imageUrl) && <img src={preview || imageUrl} alt="Prévia do atalho" className="h-36 w-full max-w-sm rounded-lg object-cover" />}<input id="home-block-image" type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => setImageFile(event.target.files?.[0])} required={!imageUrl} /><p className="text-xs text-neutral-600">Dimensão recomendada: 1200 × 900 px (proporção 4:3). Formatos: JPG, PNG ou WebP.</p></div>
      <label className="flex items-center gap-2"><input type="checkbox" checked={active} onChange={(event) => setActive(event.target.checked)} />Ativo na Home</label>
      <div className="flex gap-2"><Button type="submit" disabled={saving}>{saving ? "Salvando…" : editingId ? "Salvar alterações" : "Criar atalho"}</Button>{editingId && <Button type="button" variant="outline" onClick={resetForm}>Cancelar edição</Button>}</div>
    </form>
    <section className="space-y-3"><h2 className="text-lg font-semibold">Atalhos cadastrados</h2>{loading && <p>Carregando…</p>}{!loading && blocks.length === 0 && <p className="rounded-lg border border-dashed p-6 text-sm text-neutral-600">Ainda não há atalhos. Crie o primeiro acima.</p>}{displayed.map((block, index) => <article key={block.id} className="flex flex-wrap items-center gap-4 rounded-xl border bg-white p-4 shadow-sm"><img src={block.image} alt="" className="size-20 rounded-lg object-cover" /><div className="min-w-40 flex-1"><h3 className="font-semibold">{block.title}</h3><p className="text-sm text-neutral-600">Coleção: {block.collection.name} · Ordem {index + 1} · {block.active ? "Ativo" : "Inativo"}</p></div>{ordering ? <div className="flex gap-1"><Button variant="outline" size="icon" aria-label="Mover para cima" disabled={index === 0} onClick={() => move(block.id, -1)}><ArrowUp /></Button><Button variant="outline" size="icon" aria-label="Mover para baixo" disabled={index === displayed.length - 1} onClick={() => move(block.id, 1)}><ArrowDown /></Button></div> : <div className="flex flex-wrap gap-2"><Button variant="outline" onClick={() => edit(block)}>Editar</Button><Button variant="outline" onClick={() => void toggle(block)}>{block.active ? "Desativar" : "Ativar"}</Button><Button variant="outline" onClick={() => void remove(block)}>Excluir</Button></div>}</article>)}</section>
  </div>;
}
