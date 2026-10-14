"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Megaphone, Pencil, Plus, Trash2 } from "lucide-react";
import AdminConfirmDialog from "@/src/components/admin/admin-confirm-dialog";
import AdminFormDialog from "@/src/components/admin/admin-form-dialog";
import {
  AdminEmptyState,
  AdminFeedback,
  AdminPageHeader,
  AdminSearch,
  AdminSkeletonList,
  AdminStatusBadge,
} from "@/src/components/admin/admin-ui";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Switch } from "@/src/components/ui/switch";
import { Textarea } from "@/src/components/ui/textarea";
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
    control,
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
  const active = useWatch({ control, name: "active" });

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSave)}>
      <div>
        <Label htmlFor="notice-content">Conteúdo</Label>
        <Textarea id="notice-content" {...register("content")} />
        {errors.content && <p role="alert">{errors.content.message}</p>}
      </div>

      <div>
        <Label htmlFor="notice-position">Posição</Label>
        <select id="notice-position" {...register("position")}>
          <option value="TOP">Topo</option>
          <option value="BELOW_CAROUSEL">Abaixo do carrossel</option>
        </select>
      </div>

      <div>
        <Label htmlFor="notice-order">Ordem</Label>
        <Input
          id="notice-order"
          type="number"
          min={0}
          step={1}
          {...register("order", { valueAsNumber: true })}
        />
        {errors.order && <p role="alert">{errors.order.message}</p>}
      </div>

      <div>
        <Label htmlFor="notice-start">Início</Label>
        <Input
          id="notice-start"
          type="datetime-local"
          value={startInput}
          onChange={(event) => {
            const value = event.target.value;
            setStartInput(value);
            setValue("startAt", value ? new Date(value).toISOString() : "", {
              shouldValidate: true,
            });
          }}
        />
        <Input type="hidden" {...register("startAt")} />
        {errors.startAt && <p role="alert">{errors.startAt.message}</p>}
      </div>

      <div>
        <Label htmlFor="notice-end">Fim</Label>
        <Input
          id="notice-end"
          type="datetime-local"
          value={endInput}
          onChange={(event) => {
            const value = event.target.value;
            setEndInput(value);
            setValue("endAt", value ? new Date(value).toISOString() : "", { shouldValidate: true });
          }}
        />
        <Input type="hidden" {...register("endAt")} />
        {errors.endAt && <p role="alert">{errors.endAt.message}</p>}
      </div>

      <label className="flex items-center justify-between gap-4 rounded-lg border border-border p-3">
        <span className="text-sm font-medium">Aviso ativo</span>
        <Switch
          checked={Boolean(active)}
          onCheckedChange={(checked) => setValue("active", checked, { shouldDirty: true })}
          aria-label="Aviso ativo"
        />
        <input type="hidden" {...register("active")} />
      </label>

      <div className="flex gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando…" : "Salvar aviso"}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
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
  const data = (await response.json()) as ApiResponse;
  if (!response.ok) throw new Error(data.message ?? "A operação não foi concluída.");
  return data;
}

function getErrorMessage(cause: unknown, fallback: string) {
  if (!(cause instanceof Error)) return fallback;
  if (cause instanceof TypeError || cause.message.toLowerCase() === "failed to fetch")
    return fallback;
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
  const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });

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

  useEffect(() => {
    void loadNotices();
  }, []);

  const normalizedSearch = search.trim().toLocaleLowerCase();
  const filteredNotices = notices.filter((notice) =>
    notice.content.toLocaleLowerCase().includes(normalizedSearch),
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
        },
      );
      await readResponse(response);
      setShowForm(false);
      setEditingNotice(undefined);
      setNoticeMessage(editingNotice ? "Aviso atualizado." : "Aviso criado.");
      await loadNotices();
    } catch (cause) {
      console.error("Erro ao salvar aviso promocional:", cause);
      setError(
        getErrorMessage(
          cause,
          editingNotice ? "Não foi possível atualizar o aviso." : "Não foi possível criar o aviso.",
        ),
      );
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
      <AdminPageHeader
        eyebrow="Conteúdo"
        title="Avisos promocionais"
        description="Gerencie o conteúdo, a posição e o período de exibição dos avisos."
        actions={
          <Button
            type="button"
            onClick={() => {
              setEditingNotice(undefined);
              setNoticeMessage("");
              setError("");
              setShowForm(true);
            }}
          >
            <Plus aria-hidden="true" /> Novo aviso
          </Button>
        }
      />

      {error && <AdminFeedback type="error">{error}</AdminFeedback>}
      {noticeMessage && <AdminFeedback type="success">{noticeMessage}</AdminFeedback>}
      <AdminFormDialog
        open={showForm}
        onOpenChange={(open) => {
          setShowForm(open);
          if (!open) setEditingNotice(undefined);
        }}
        title={editingNotice ? "Editar aviso" : "Novo aviso"}
        description="Configure a mensagem, a posição e o período de exibição."
      >
        <PromoNoticeForm
          key={editingNotice?.id ?? "new"}
          notice={editingNotice}
          onSave={saveNotice}
          onCancel={() => setShowForm(false)}
        />
      </AdminFormDialog>

      <section className="space-y-4" aria-labelledby="notices-list-title">
        <div className="admin-toolbar">
          <div className="admin-section-heading">
            <div>
              <h2 id="notices-list-title">Avisos cadastrados</h2>
              <p>
                {notices.length} {notices.length === 1 ? "aviso" : "avisos"}
              </p>
            </div>
          </div>
          <AdminSearch
            value={search}
            onChange={setSearch}
            placeholder="Pesquisar avisos…"
            label="Pesquisar avisos pelo conteúdo"
          />
        </div>
        {loading && <AdminSkeletonList />}
        {!loading && notices.length === 0 && !error && (
          <AdminEmptyState
            icon={Megaphone}
            title="Nenhum aviso cadastrado"
            description="Crie um aviso para comunicar novidades na loja."
          />
        )}
        {!loading && notices.length > 0 && filteredNotices.length === 0 && (
          <AdminEmptyState
            title="Nenhum resultado"
            description={`Nenhum aviso corresponde à busca “${search}”.`}
          />
        )}
        {!loading &&
          filteredNotices.map((notice) => (
            <article
              key={notice.id}
              className="admin-item flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground">{notice.content}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Posição: {notice.position === "TOP" ? "Topo" : "Abaixo do carrossel"} · Ordem:{" "}
                  {notice.order}
                </p>
                <p className="text-sm text-muted-foreground tabular-nums">
                  Período: {dateFormatter.format(new Date(notice.startAt))} –{" "}
                  {dateFormatter.format(new Date(notice.endAt))}
                </p>
                <AdminStatusBadge active={notice.active} />
              </div>
              <div className="admin-actions">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setEditingNotice(notice);
                    setError("");
                    setNoticeMessage("");
                    setShowForm(true);
                  }}
                >
                  <Pencil aria-hidden="true" /> Editar
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => setDeleteTarget(notice)}
                >
                  <Trash2 aria-hidden="true" /> Excluir
                </Button>
              </div>
            </article>
          ))}
      </section>
      <AdminConfirmDialog
        open={Boolean(deleteTarget)}
        title="Excluir aviso?"
        description="O aviso promocional será removido permanentemente."
        onCancel={() => setDeleteTarget(undefined)}
        onConfirm={() => deleteNotice(deleteTarget!)}
      />
    </div>
  );
}
