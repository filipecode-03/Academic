import { CalendarDays, ListChecks, ClipboardPaste } from "lucide-react"

function Metricas() {
    return (
        <div className="bg-[#003049] p-8">
            <h1 className="text-3xl lg:text-4xl text-white font-bold text-center">Métrica dos Processo Realizados em 2026</h1>
            <div className="text-white mt-6 flex flex-col gap-4">
                <div>
                    <CalendarDays />
                    <h2>Demanda Mensal</h2>
                    <p>Recebemos diversas solicitações todos os meses, envolvendo diferentes tipos de processos e necessidades da administração.</p>
                </div>
                <div>
                    <ListChecks />
                    <h2>Análise Técnica</h2>
                    <p>Cada processo é avaliado com atenção, passando por uma análise minuciosa para garantir conformidade, clareza e precisão nas informações.</p>
                </div>
                <div>
                    <ClipboardPaste />
                    <h2>Fase de Lances</h2>
                    <p>Após a conclusão os processos são encaminhados para a fase de lances, onde os fornecedores apresentam suas propostas competitivas.</p>
                </div>
            </div>
            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6yuyRYyY2J8p2KhFfrrPYpCmPsHqiiBocQ_NLth36DB42eErcDVcfhEqRkJZKMw/pubchart?oid=105442287&format=interactive">link</a>
            
        </div>
    )
}

export default Metricas