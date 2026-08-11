import Integrantes from "./Equipe/Integrantes"

function Equipe() {
    return (
        <section className="pt-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-center">Equipe da Seção de Planejamento de Contratações (SPC)</h2>
            <p className="mt-5 max-w-5xl mx-auto leading-7">A <span className="font-bold">Seção de Planejamento de Contratações (SPC)</span> é composta por uma equipe <span className="font-bold">multidisciplinar</span>, estruturada para garantir a correta condução dos processos de aquisições, contratações e renovações no âmbito da <span className="font-bold">Operação Acolhida</span>. Cada integrante possui atribuições bem definidas, atuando de forma integrada desde o recebimento das demandas até o encaminhamento dos processos ao Núcleo de Licitações.</p>
            <Integrantes />
        </section>
    )
}

export default Equipe