"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { cn } from "@/src/lib/utils";

export default function AdminFormDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  size = "default",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
  size?: "default" | "wide";
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-admin
        className={cn(
          "max-h-[calc(100dvh-2rem)] grid-rows-[auto_minmax(0,1fr)] overflow-hidden p-0 sm:max-w-xl",
          size === "wide" && "sm:max-w-3xl",
        )}
      >
        <DialogHeader className="border-b px-5 py-4 pr-12">
          <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto px-1 pb-1">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
