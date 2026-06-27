import patria from '../assets/images/patria.svg'

function Footer() {
    return (
        <footer className="bg-[#232323] flex items-center justify-between text-white">
            <div className="flex flex-col items-center justify-center gap-10">
                <img src={patria} alt="patria" className="w-300" />
                <p>Operação Acolhida</p>
            </div>
            <div>
                <div>
                    <p>REPÚBLICA FEDERATIVA DO BRASILEXÉRCITO BRASILEIROFORÇA-ÁERIA BRASILEIRAMARINHA DO BRASIL</p>
                    <p>Endereço da Sede:Unidade Gestora ExecutoraR. Floriano Peixoto, 221 - Centro Cep: 69301-320Boa Vista - RR</p>
                </div>
                <div>
                    <p>Copyright @ 2025 OPERAÇÃO ACOLHIDA | Criado por Filipe Magalhães</p>
                </div>
            </div>
            <div></div>
        </footer>
    )
}

export default Footer