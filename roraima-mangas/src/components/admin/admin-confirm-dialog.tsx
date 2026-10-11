"use client";

import { useState } from "react";
import { AlertTriangle, X } from "lucide-react";

import { Button } from "@/src/components/ui/button";

export default function AdminConfirmDialog({
  open,
  title,
  description,
  confirmLabel = "Excluir",
  onCancel,
  onConfirm,
}: {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => Promise<void> | void;
}) {
  const [pending, setPending] = useState(false);
  if (!open) return null;

  async function confirm() {
    try { setPending(true); await onConfirm(); }
    finally { setPending(false); }
  }

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/55 p-4 backdrop-blur-[2px] motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150" onMouseDown={(event) => { if (event.target === event.currentTarget && !pending) onCancel(); }}>
      <section role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-description" className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl motion-safe:animate-in motion-safe:zoom-in-95 motion-safe:slide-in-from-bottom-2 motion-safe:duration-200">
        <div className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-red-50 text-red-700"><AlertTriangle className="size-5" /></span>
          <div className="min-w-0 flex-1"><h2 id="confirm-title" className="font-heading text-lg font-bold text-slate-950">{title}</h2><p id="confirm-description" className="mt-1 text-sm leading-6 text-slate-600">{description}</p></div>
          <Button type="button" variant="ghost" size="icon" aria-label="Fechar confirmação" disabled={pending} onClick={onCancel}><X /></Button>
        </div>
        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button type="button" variant="outline" disabled={pending} onClick={onCancel}>Cancelar</Button>
          <Button type="button" variant="destructive" disabled={pending} onClick={() => void confirm()}>{pending ? "Excluindo…" : confirmLabel}</Button>
        </div>
      </section>
    </div>
  );
}
