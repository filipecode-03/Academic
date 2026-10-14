import type { LucideIcon } from "lucide-react";
import { AlertCircle, CheckCircle2, Inbox, Search } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import Skeleton from "@/src/components/ui/skeleton";
import { cn } from "@/src/lib/utils";

export function AdminPageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
}) {
  return (
    <header className="admin-page-header">
      <div className="min-w-0">
        {eyebrow && <p className="admin-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {actions && <div className="admin-page-actions">{actions}</div>}
    </header>
  );
}

export function AdminFeedback({
  type,
  children,
}: {
  type: "error" | "success";
  children: React.ReactNode;
}) {
  const Icon = type === "error" ? AlertCircle : CheckCircle2;
  return (
    <div
      role={type === "error" ? "alert" : "status"}
      className={`admin-feedback admin-feedback-${type}`}
    >
      <Icon aria-hidden="true" className="size-4 shrink-0" />
      <span>{children}</span>
    </div>
  );
}

export function AdminSearch({
  value,
  onChange,
  placeholder,
  label,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
}) {
  return (
    <div className="admin-search">
      <Search aria-hidden="true" className="size-4" />
      <input
        type="search"
        name="admin-search"
        autoComplete="off"
        spellCheck={false}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={label}
      />
      {value && (
        <Button type="button" variant="ghost" size="xs" onClick={() => onChange("")}>
          Limpar
        </Button>
      )}
    </div>
  );
}

export function AdminEmptyState({
  title,
  description,
  icon: Icon = Inbox,
  action,
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
}) {
  return (
    <div className="admin-empty-state">
      <div className="admin-empty-icon">
        <Icon aria-hidden="true" className="size-5" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function AdminStatusBadge({
  active,
  children,
}: {
  active: boolean;
  children?: React.ReactNode;
}) {
  return (
    <span className={cn("admin-badge", active ? "admin-badge-success" : "admin-badge-muted")}>
      {children ?? (active ? "Ativo" : "Inativo")}
    </span>
  );
}

export function AdminSkeletonList({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-3" aria-label="Carregando conteúdo" role="status">
      {Array.from({ length: rows }).map((_, index) => (
        <Skeleton key={index} className="h-24 rounded-xl border border-border" />
      ))}
    </div>
  );
}
