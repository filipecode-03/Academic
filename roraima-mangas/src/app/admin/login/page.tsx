"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Informe o e-mail.")
    .email("Informe um e-mail válido."),

  password: z
    .string()
    .min(1, "Informe a senha."),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
  const router = useRouter();

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormData) {
    setError("");

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!result || result.error) {
      setError("E-mail ou senha inválidos.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main>
      <h1>Login Administrativo</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">E-mail</label>

          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />

          {errors.email && (
            <p>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Senha</label>

          <input
            id="password"
            type="password"
            autoComplete="current-password"
            {...register("password")}
          />

          {errors.password && (
            <p>{errors.password.message}</p>
          )}
        </div>

        {error && <p>{error}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}