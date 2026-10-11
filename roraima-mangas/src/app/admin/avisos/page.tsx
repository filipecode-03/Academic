"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AdminConfirmDialog from "@/src/components/admin/admin-confirm-dialog";
import {
  createPromoNoticeSchema,
  type CreatePromoNoticeInput,
} from "@/src/schemas/promo-notice.schema";

type PromoNotice = CreatePromoNoticeInput & { id: string };
type PromoNoticeFormProps = {
  notice?: PromoNotice;
  onSave: (values: CreatePromoNoticeInput) => Promise<void>;
  onCancel: () => void;
};

function toDateTimeLocal(value: string) {
  const date = new Date(value);
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}

function PromoNoticeForm({ notice, onSave, onCancel }: PromoNoticeFormProps) {
  const [startInput, setStartInput] = useState(notice ? toDateTimeLocal(notice.startAt) : "");
  const [endInput, setEndInput] = useState(notice ? toDateTimeLocal(notice.endAt) : "");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<z.input<typeof createPromoNoticeSchema>, unknown, CreatePromoNoticeInput>({
    resolver: zodResolver(createPromoNoticeSchema),
    defaultValues: {
      content: notice?.content ?? "",
      position: notice?.position ?? "TOP",
      order: notice?.order ?? 0,
      active: notice?.active ?? true,
      startAt: notice?.startAt ?? "",
      endAt: notice?.endAt ?? "",
    },
  });

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSave)}>
      <h2 className="text-xl font-semibold">{notice ? "Editar aviso" : "Novo aviso"}</h2>

      <div>
        <label className="block" htmlFor="notice-content">Conteúdo</label>
        <textarea id="notice-content" className="w-full border p-2" {...register("content")} />
        {errors.content && <p role="alert">{errors.content.message}</p>}
      </div>

      <div>
        <label className="block" htmlFor="notice-position">Posição</label>
        <select id="notice-position" {...register("position")}>
          <option value="TOP">Topo</option>
          <option value="BELOW_CAROUSEL">Abaixo do carrossel</option>
        </select>
      </div>

      <div>
        <label className="block" htmlFor="notice-order">Ordem</label>
        <input id="notice-order" type="number" min={0} step={1} {...register("order", { valueAsNumber: true })} />
        {errors.order && <p role="alert">{errors.order.message}</p>}
      </div>

      <div>
        <label className="block" htmlFor="notice-start">Início</label>
        <input
          id="notice-start"
          type="datetime-local"
          value={startInput}
          onChange={(event) => {
            const value = event.target.value;
            setStartInput(value);
            setValue("startAt", value ? new Date(value).toISOString() : "", { shouldValidate: true });
          }}
        />
        <input type="hidden" {...register("startAt")} />
        {errors.startAt && <p role="alert">{errors.startAt.message}</p>}
      </div>

      <div>
        <label className="block" htmlFor="notice-end">Fim</label>
        <input
          id="notice-end"
          type="datetime-local"
          value={endInput}
          onChange={(event) => {
            const value = event.target.value;
            setEndInput(value);
            setValue("endAt", value ? new Date(value).toISOString() : "", { shouldValidate: true });
          }}
        />
        <input type="hidden" {...register("endAt")} />
        {errors.endAt && <p role="alert">{errors.endAt.message}</p>}
      </div>

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("active")} />
        Aviso ativo
      </label>

      <div className="flex gap-3">
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Salvando..." : "Salvar aviso"}</button>
        <button type="button" className="admin-button-secondary" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
}

type ApiResponse = {
  success?: boolean;
  message?: string;
  promoNotices?: PromoNotice[];
  promoNotice?: PromoNotice;
};

async function readResponse(response: Response): Promise<ApiResponse> {
  const data = await response.json() as ApiResponse;
  if (!response.ok) throw new Error(data.message ?? "A operação não foi concluída.");
  return data;
}

function getErrorMessage(cause: unknown, fallback: string) {
  if (!(cause instanceof Error)) return fallback;
  if (cause instanceof TypeError || cause.message.toLowerCase() === "failed to fetch") return fallback;
  return cause.message;
}

export default function PromoNoticesPage() {
  const [notices, setNotices] = useState<PromoNotice[]>([]);
  const [editingNotice, setEditingNotice] = useState<PromoNotice>();
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [noticeMessage, setNoticeMessage] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<PromoNotice>();

  async function loadNotices() {
    try {
      setLoading(true);
      setError("");
      const data = await readResponse(await fetch("/api/promo-notices"));
      setNotices(data.promoNotices ?? []);
    } catch (cause) {
      console.error("Erro ao carregar avisos promocionais:", cause);
      setError(getErrorMessage(cause, "Não foi possível carregar os avisos."));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void loadNotices(); }, []);

  const normalizedSearch = search.trim().toLocaleLowerCase();
  const filteredNotices = notices.filter((notice) =>
    notice.content.toLocaleLowerCase().includes(normalizedSearch)
  );

  async function saveNotice(values: CreatePromoNoticeInput) {
    try {
      setError("");
      const response = await fetch(
        editingNotice ? `/api/promo-notices/${editingNotice.id}` : "/api/promo-notices",
        {
          method: editingNotice ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      await readResponse(response);
      setShowForm(false);
      setEditingNotice(undefined);
      setNoticeMessage(editingNotice ? "Aviso atualizado." : "Aviso criado.");
      await loadNotices();
    } catch (cause) {
      console.error("Erro ao salvar aviso promocional:", cause);
      setError(getErrorMessage(
        cause,
        editingNotice ? "Não foi possível atualizar o aviso." : "Não foi possível criar o aviso."
      ));
    }
  }

  async function deleteNotice(notice: PromoNotice) {
    try {
      setError("");
      await readResponse(await fetch(`/api/promo-notices/${notice.id}`, { method: "DELETE" }));
      setNoticeMessage("Aviso excluído.");
      setDeleteTarget(undefined);
      await loadNotices();
    } catch (cause) {
      console.error("Erro ao excluir aviso promocional:", cause);
      setError(getErrorMessage(cause, "Não foi possível excluir o aviso."));
    }
  }

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <p className="admin-eyebrow">Conteúdo</p>
          <h1>Avisos promocionais</h1>
          <p>Gerencie o conteúdo, a posição e o período de exibição dos avisos.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setEditingNotice(undefined);
            setNoticeMessage("");
            setError("");
            setShowForm((current) => !current);
          }}
        >
          {showForm ? "Fechar formulário" : "Novo aviso"}
        </button>
      </header>

      {error && <p role="alert" className="admin-feedback admin-feedback-error">{error}</p>}
      {noticeMessage && <p role="status" className="admin-feedback admin-feedback-success">{noticeMessage}</p>}
      {showForm && (
        <PromoNoticeForm
          key={editingNotice?.id ?? "new"}
          notice={editingNotice}
          onSave={saveNotice}
          onCancel={() => setShowForm(false)}
        />
      )}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Avisos cadastrados</h2>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="search"
            className="w-full max-w-md"
            placeholder="Pesquisar avisos..."
            aria-label="Pesquisar avisos pelo conteúdo"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          {search && <button type="button" onClick={() => setSearch("")}>Limpar pesquisa</button>}
        </div>
        {loading && <div className="h-24 animate-pulse rounded-xl border border-slate-200 bg-white" />}
        {!loading && notices.length === 0 && !error && <p className="admin-empty-state">Nenhum aviso cadastrado. Crie um aviso para comunicar novidades na loja.</p>}
        {!loading && notices.length > 0 && filteredNotices.length === 0 && (
          <p>Nenhum aviso encontrado para “{search}”.</p>
        )}
        {!loading && filteredNotices.map((notice) => (
          <article key={notice.id} className="admin-item flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium">{notice.content}</p>
              <p>Posição: {notice.position === "TOP" ? "Topo" : "Abaixo do carrossel"} · Ordem: {notice.order}</p>
              <p>Status: {notice.active ? "Ativo" : "Inativo"}</p>
              <p>Período: {new Date(notice.startAt).toLocaleString()} – {new Date(notice.endAt).toLocaleString()}</p>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => { setEditingNotice(notice); setError(""); setNoticeMessage(""); setShowForm(true); }}>Editar</button>
              <button type="button" className="admin-button-danger" onClick={() => setDeleteTarget(notice)}>Excluir</button>
            </div>
          </article>
        ))}
      </section>
      <AdminConfirmDialog open={Boolean(deleteTarget)} title="Excluir aviso?" description="O aviso promocional será removido permanentemente." onCancel={() => setDeleteTarget(undefined)} onConfirm={() => deleteNotice(deleteTarget!)} />
    </div>
  );
}
