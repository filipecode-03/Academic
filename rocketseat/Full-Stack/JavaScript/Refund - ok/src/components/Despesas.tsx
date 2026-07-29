import { type Despesa } from "../types/despesa"
import DespesasItem from "./DespesasItem"

interface Props {
    despesas: Despesa[]
    removerDespesa: (id: string) => void
    total: number
}

function Despesas({
    despesas,
    removerDespesa,
    total
}: Props) {

    return (
        <div className="bg-white rounded-2xl w-155 p-10">
            <div className="flex items-center border-b border-gray-300 pb-5 justify-between">
                <div className="flex gap-3 items-center text-gray-500">
                    <h2 className="text-[20px]">
                        Minhas solicitações
                    </h2>
                    <div className="p-1 bg-gray-300 rounded-full"></div>
                    <span className="uppercase text-[14px]">
                        {despesas.length} despesas
                    </span>
                </div>
                <span className="text-2xl font-bold text-gray-700">
                    {total.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </span>
            </div>
            <div className="mt-8 space-y-4">
                {despesas.map(item => (
                    <DespesasItem
                        key={item.id}
                        despesa={item}
                        removerDespesa={removerDespesa}
                    />
                ))}
            </div>
        </div>
    )
}

export default Despesas