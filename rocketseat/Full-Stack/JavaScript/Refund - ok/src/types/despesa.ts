export interface Despesa {
    id: string
    titulo: string
    categoria: Categoria
    valor: number
}

export type Categoria =
    | "Alimentação"
    | "Hospedagem"
    | "Transporte"
    | "Serviços"
    | "Outros"