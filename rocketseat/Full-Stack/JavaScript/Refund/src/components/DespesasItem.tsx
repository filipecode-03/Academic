import {
    Utensils,
    Bed,
    CarTaxiFront,
    Wrench,
    BookmarkPlus,
    X
} from "lucide-react"

import { type Despesa } from "../types/despesa"

interface Props {
    despesa: Despesa
    removerDespesa: (id: string) => void
}

function DespesasItem({
    despesa,
    removerDespesa
}: Props) {

    function getIcon() {

        switch (despesa.categoria) {

            case "Alimentação":
                return <Utensils />

            case "Hospedagem":
                return <Bed />

            case "Transporte":
                return <CarTaxiFront />

            case "Serviços":
                return <Wrench />

            default:
                return <BookmarkPlus />

        }

    }

    return (

        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="bg-gray-100 text-[#1F8459] rounded-full p-3">
                    {getIcon()}
                </div>
                <div>
                    <h3 className="font-bold text-[18px]">
                        {despesa.titulo}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {despesa.categoria}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <span className="font-semibold">
                    {despesa.valor.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </span>
                <button
                    onClick={() => removerDespesa(despesa.id)} className="cursor-pointer"
                >
                    <X className="text-red-600" />
                </button>
            </div>
        </div>

    )
}

export default DespesasItem