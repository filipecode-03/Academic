export type Project = {
  slug: string;
  name: string;
  category: string;
  context: string;
  challenge: string;
  solution: string;
  technologies: string[];
  url: string | null;
  image: string | null;
};

export const projects: Project[] = [
  {
    slug: "roraima-mangas",
    name: "Roraima Mangas",
    category: "E-commerce",
    // EDITAR: substitua os três campos abaixo apenas com informações confirmadas.
    context: "Contexto do projeto em atualização.",
    challenge: "Desafio do projeto em atualização.",
    solution: "Solução desenvolvida em atualização.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
    // EDITAR: informe o endereço publicado quando estiver disponível.
    url: null,
    // EDITAR: adicione a captura real em /public/projects e informe o caminho aqui.
    image: null,
  },
];
