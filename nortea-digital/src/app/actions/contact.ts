"use server";

import type { ContactFormState } from "@/types/contact";

const allowedProjectTypes = new Set([
  "Website ou landing page",
  "E-commerce",
  "Sistema web",
  "Integração ou automação",
  "Manutenção",
  "Outro",
]);

function text(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitContact(
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = text(formData, "name");
  const email = text(formData, "email");
  const company = text(formData, "company");
  const projectType = text(formData, "projectType");
  const investment = text(formData, "investment");
  const message = text(formData, "message");
  const privacy = formData.get("privacy") === "on";
  const website = text(formData, "website");
  const version = previousState.version + 1;
  const values = { name, email, company, projectType, investment, message, privacy };

  if (website) {
    return { status: "success", message: "Mensagem recebida.", version };
  }

  const errors: ContactFormState["errors"] = {};
  if (name.length < 2) errors.name = "Informe seu nome.";
  if (!isEmail(email)) errors.email = "Informe um e-mail válido.";
  if (!allowedProjectTypes.has(projectType)) errors.projectType = "Selecione o tipo de projeto.";
  if (message.length < 20) errors.message = "Conte um pouco mais sobre o projeto.";
  if (!privacy) errors.privacy = "Você precisa aceitar a política de privacidade.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revise os campos destacados.",
      version,
      errors,
      values,
    };
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) {
    return {
      status: "error",
      message:
        "O canal de envio ainda não foi configurado. Adicione CONTACT_FORM_ENDPOINT antes da publicação.",
      version,
      values,
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        company: company || null,
        projectType,
        investment: investment || null,
        message,
        source: "nortea-digital-website",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) throw new Error("Contact endpoint rejected the request.");

    return {
      status: "success",
      message: "Mensagem enviada. A Nortea entrará em contato pelo e-mail informado.",
      version,
    };
  } catch {
    return {
      status: "error",
      message: "Não foi possível enviar agora. Tente novamente em alguns instantes.",
      version,
      values,
    };
  }
}
