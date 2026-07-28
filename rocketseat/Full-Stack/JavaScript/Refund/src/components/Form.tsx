import { useForm } from "react-hook-form"
import { type Despesa } from "../types/despesa"

interface FormData {
    titulo: string
    categoria: Despesa["categoria"]
    valor: number
}

interface Props {
    adicionarDespesa: (despesa: Despesa) => void
}

function Form({ adicionarDespesa }: Props) {

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FormData>()

    function onSubmit(data: FormData) {

        adicionarDespesa({
            id: crypto.randomUUID(),
            ...data,
            valor: Number(data.valor)
        })

        reset()
    }

    return (

        <div className="bg-white rounded-2xl p-10">
            <h1 className="text-2xl font-bold">Solicitação de reembolso</h1>
            <p className="text-gray-500 mt-3">Informe os dados da despesa para solicitar reembolso.</p>
            <p className="text-gray-500">A despesa será analisada e reembolsada em até 30 dias.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                <div>
                    <label className="uppercase text-[14px] text-gray-500">
                        Título da despesa
                    </label>
                    <input
                        {...register("titulo", {
                            required: true
                        })}
                        className="mt-2 w-full rounded-lg border p-3"
                    />
                </div>
                <fieldset className="flex items-center gap-5 mt-4">
                    <div>
                        <label className="uppercase text-[14px] text-gray-500">
                            Categoria
                        </label>
                        <select
                            {...register("categoria")}
                            className="mt-2 w-full text-gray-800 rounded-lg border p-3"
                        >
                            <option>Alimentação</option>
                            <option>Hospedagem</option>
                            <option>Transporte</option>
                            <option>Serviços</option>
                            <option>Outros</option>
                        </select>
                    </div>
                    <div>
                        <label className="uppercase text-[14px] text-gray-500">
                            Valor
                        </label>
                        <input
                            type="number"
                            placeholder="0,00"
                            step="0.01"
                            {...register("valor", {
                                valueAsNumber: true
                            })}
                            className="mt-2 w-full rounded-lg border p-3"
                        />
                    </div>
                </fieldset>
                <button
                    type="submit"
                    className="w-full mt-8 rounded-lg bg-[#1F8459] py-4 font-bold text-white"
                >
                    Adicionar despesa
                </button>
            </form>
        </div>
    )
}

export default Form