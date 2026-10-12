export const siteConfig = {
  name: "Nortea Digital",
  slogan: "Tecnologia que dá direção ao seu negócio.",
  descriptor: "Websites, e-commerces e sistemas sob medida.",
  description:
    "Desenvolvemos soluções digitais que unem estratégia, design e tecnologia para simplificar processos e fazer negócios crescerem.",
  contact: {
    whatsapp: "+55 (95) 98111-2229",
    email: "contatofilipecode@gmail.com",
  },
  owner: {
    name: "[NOME_DO_RESPONSÁVEL]",
    photo: "[SUA_FOTO_PROFISSIONAL]",
    bio: "[BREVE_BIOGRAFIA_DO_RESPONSÁVEL]",
    location: "[CIDADE, ESTADO]",
    professionalLinks: "[LINKS_PROFISSIONAIS]",
  },
  legal: {
    privacy: "/politica-de-privacidade",
    terms: "/termos-de-uso",
  },
} as const;

export const navigation = [
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

export function isPlaceholder(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}
