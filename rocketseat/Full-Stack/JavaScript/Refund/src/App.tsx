import { useMemo, useState } from "react"

import logo from "./assets/images/Logo.png"

import Form from "./components/Form"
import Despesas from "./components/Despesas"

import { type Despesa } from "./types/despesa"

function App() {

    const [despesas, setDespesas] = useState<Despesa[]>([])

    function adicionarDespesa(despesa: Despesa) {
        setDespesas((old) => [...old, despesa])
    }

    function removerDespesa(id: string) {
        setDespesas((old) => old.filter(item => item.id !== id))
    }

    const total = useMemo(() => {
        return despesas.reduce((acc, item) => acc + item.valor, 0)
    }, [despesas])

    return (
        <div className="w-270 mx-auto py-12 font-['Open_Sans']">
            <img src={logo} alt="" />
            <div className="flex gap-5 mt-5 items-start">
                <Form adicionarDespesa={adicionarDespesa} />
                <Despesas
                    despesas={despesas}
                    removerDespesa={removerDespesa}
                    total={total}
                />
            </div>
        </div>
    )
}

export default App