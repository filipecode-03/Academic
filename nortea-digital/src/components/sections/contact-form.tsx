"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "@/app/actions/contact";
import type { ContactFormState } from "@/types/contact";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
  version: 0,
};

const fieldClass =
  "min-h-12 w-full border-0 border-b border-natural/25 bg-transparent px-0 py-3 text-base text-natural placeholder:text-natural/35 focus:border-natural";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status !== "error" || !state.errors) return;
    const firstInvalid = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
    firstInvalid?.focus();
  }, [state]);

  return (
    <form
      key={state.version}
      ref={formRef}
      id="formulario-contato"
      action={formAction}
      className="grid gap-8"
      noValidate
    >
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-natural/65">Nome</label>
          <input id="name" name="name" autoComplete="name" required maxLength={100} defaultValue={state.values?.name} aria-invalid={Boolean(state.errors?.name)} aria-describedby={state.errors?.name ? "name-error" : undefined} className={fieldClass} />
          {state.errors?.name && <p id="name-error" className="mt-2 text-sm text-mist">{state.errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-natural/65">E-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" spellCheck={false} required maxLength={160} defaultValue={state.values?.email} aria-invalid={Boolean(state.errors?.email)} aria-describedby={state.errors?.email ? "email-error" : undefined} className={fieldClass} />
          {state.errors?.email && <p id="email-error" className="mt-2 text-sm text-mist">{state.errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="text-sm text-natural/65">Empresa <span className="text-natural/35">(opcional)</span></label>
          <input id="company" name="company" autoComplete="organization" maxLength={120} defaultValue={state.values?.company} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="projectType" className="text-sm text-natural/65">Tipo de projeto</label>
          <select id="projectType" name="projectType" autoComplete="off" required defaultValue={state.values?.projectType ?? ""} aria-invalid={Boolean(state.errors?.projectType)} aria-describedby={state.errors?.projectType ? "project-type-error" : undefined} className={fieldClass}>
            <option value="" disabled className="text-forest-black">Selecione uma opção</option>
            <option className="text-forest-black">Website ou landing page</option>
            <option className="text-forest-black">E-commerce</option>
            <option className="text-forest-black">Sistema web</option>
            <option className="text-forest-black">Integração ou automação</option>
            <option className="text-forest-black">Manutenção</option>
            <option className="text-forest-black">Outro</option>
          </select>
          {state.errors?.projectType && <p id="project-type-error" className="mt-2 text-sm text-mist">{state.errors.projectType}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="investment" className="text-sm text-natural/65">Faixa de investimento <span className="text-natural/35">(opcional)</span></label>
        <input
          id="investment"
          name="investment"
          inputMode="text"
          autoComplete="off"
          maxLength={80}
          defaultValue={state.values?.investment}
          placeholder="Ex.: ainda não definido…"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-natural/65">Mensagem</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={3000}
          rows={5}
          autoComplete="off"
          defaultValue={state.values?.message}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          placeholder="Ex.: preciso construir, melhorar ou conectar…"
          className={`${fieldClass} resize-y`}
        />
        {state.errors?.message && <p id="message-error" className="mt-2 text-sm text-mist">{state.errors.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-natural/65">
          <input name="privacy" type="checkbox" required defaultChecked={state.values?.privacy} aria-invalid={Boolean(state.errors?.privacy)} aria-describedby={state.errors?.privacy ? "privacy-error" : undefined} className="mt-1 h-4 w-4 accent-natural" />
          <span>
            Li e aceito a <a href="/politica-de-privacidade" className="underline underline-offset-4 hover:text-natural">Política de Privacidade</a>.
          </span>
        </label>
        {state.errors?.privacy && <p id="privacy-error" className="mt-2 text-sm text-mist">{state.errors.privacy}</p>}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          className="min-h-14 bg-natural px-8 font-semibold text-forest-black transition-colors hover:bg-mist disabled:cursor-wait disabled:opacity-60"
        >
          {pending ? "Enviando…" : "Enviar detalhes do projeto"}
        </button>
        <p
          aria-live="polite"
          className={`text-sm leading-6 ${state.status === "success" ? "text-mist" : "text-natural/60"}`}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
