"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, LockKeyhole } from "lucide-react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import logo from "@/public/logo.jpg";
import ThemeToggle from "@/src/components/theme-toggle";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

const loginSchema = z.object({
  email: z.string().min(1, "Informe o e-mail.").email("Informe um e-mail válido."),
  password: z.string().min(1, "Informe a senha."),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function AdminLoginForm({ callbackUrl }: { callbackUrl: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  async function onSubmit(data: LoginFormData) {
    setError("");
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl,
      redirect: false,
    });

    if (!result || result.error) {
      setError("E-mail ou senha inválidos.");
      return;
    }

    router.replace(result.url ?? callbackUrl);
    router.refresh();
  }

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-background px-4 py-12 text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--brand)_24%,transparent),transparent_38%)]"
      />
      <ThemeToggle className="absolute top-4 right-4 border border-border bg-background/80 shadow-sm backdrop-blur sm:top-6 sm:right-6" />

      <section className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-[0_24px_70px_rgb(13_13_13/0.12)] sm:p-8">
        <div className="mb-7 flex items-center gap-3">
          <Image src={logo} alt="Roraima Mangás" priority className="size-12 rounded-full" />
          <div>
            <p className="font-heading font-bold">Roraima Mangás</p>
            <p className="text-sm text-muted-foreground">Painel administrativo</p>
          </div>
        </div>

        <div className="mb-6">
          <span className="mb-3 grid size-10 place-items-center rounded-xl bg-brand/20 text-brand-deep dark:text-brand">
            <LockKeyhole aria-hidden="true" className="size-5" />
          </span>
          <h1 className="font-heading text-2xl font-bold tracking-tight">Acesso administrativo</h1>
          <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
            Entre com suas credenciais para gerenciar a loja.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              autoFocus
              aria-invalid={Boolean(errors.email)}
              className="h-11"
              {...register("email")}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              aria-invalid={Boolean(errors.password)}
              className="h-11"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password.message}</p>
            )}
          </div>

          {error && (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-lg border border-destructive/25 bg-destructive/10 px-3.5 py-3 text-sm text-destructive"
            >
              <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              {error}
            </div>
          )}

          <Button type="submit" size="lg" className="h-11 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </section>
    </main>
  );
}
