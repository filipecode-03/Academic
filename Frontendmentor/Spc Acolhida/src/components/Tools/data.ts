import type { Tool } from "./types";

import comprasNet from '../../assets/images/comprasNet.svg'
import comprasNetPreview from '../../assets/images/comprasNetPreview.png'
import bancoPreco from '../../assets/images/banco-preco.png'
import bancoPrecoPreview from '../../assets/images/banco-preco-preview.png'

export const tools: Tool[] = [
    {
        id: 1,
        title: "Compras Net",
        description:
            "Sistema do Governo Federal utilizado para divulgação e realização de compras públicas, reunindo licitações, contratos e atas de órgãos da administração pública.",
        image: comprasNet,
        preview: comprasNetPreview,
        category: "Confecção de Documentos",
        alternatives: ["Word", "Google Docs"],
    },
    {
        id: 2,
        title: "Banco de Preço",
        description:
            "Plataforma online utilizada para pesquisa e comparação de preços, auxiliando na estimativa de valores de mercado em processos licitatórios.",
        image: bancoPreco,
        preview: bancoPrecoPreview,
        category: "Pesquisa de Preço",
        alternatives: ["Compras Net", "PNCP"],
    },
];