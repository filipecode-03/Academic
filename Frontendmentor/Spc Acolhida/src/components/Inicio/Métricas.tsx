import { CalendarDays, ListChecks, ClipboardPaste, Boxes, Wifi, Wrench, Map } from "lucide-react"

function Metricas() {
    return (
        <div className="bg-[#003049] text-white p-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-center">Métrica dos Processo Realizados em 2026</h1>
            <div className=" mt-6 flex flex-col gap-4">
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
            <div>
                <div>
                    <h2>Consumo (33.90.30)</h2>
                    <p>Os materiais e serviços classificados como consumo são aqueles que possuem duração inferior a dois anos, sendo utilizados de forma contínua ou que se desgastam rapidamente. Por isso, são registrados na natureza de despesa 33.90.30, destinada a itens de uso imediato ou rotineiro.</p>
                </div>
                <div>
                    <h2>Permanente (44.90.52)</h2>
                    <p>Os materiais e serviços considerados permanentes possuem vida útil superior a dois anos, conservando suas características e funcionalidade por longos períodos. Esses itens são registrados na natureza de despesa 44.90.52, voltada para bens duráveis e de caráter estrutural.</p>
                </div>
            </div>
            <div>
                <div>
                    <h2 className="text-center">Principais demandantes</h2>
                    <div>
                        <div>
                            <Boxes />
                            <p>Almox - Almoxarifado</p>
                        </div>
                        <div>
                            <Wifi />
                            <p>D6 - Seção de Comunicações e Sistemas de Informação</p>
                        </div>
                        <div>
                            <Wrench />
                            <p>COE - Centro de Operações de Engenharia</p>
                        </div>
                        <div>
                            <Map />
                            <p>D4 - Centro de Coordenações de Operaçãoes Logísticas</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-center">Integrar & Acolher</h2>
                    <p>Cada setor da Operação Acolhida desempenha funções cruciais e, por isso, demanda continuamente materiais, equipamentos e serviços para garantir a continuidade das operações.</p>
                </div>
            </div>
        </div>
    )
}

export default Metricas