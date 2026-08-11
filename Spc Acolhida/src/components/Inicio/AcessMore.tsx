import SEI from '../../assets/images/SEI.svg'
import compras from '../../assets/images/comprasNet.svg'
import pncp from '../../assets/images/pncp.svg'
import sheets from '../../assets/images/googleSheets.png'

function AcessMore() {

    const cards = [
    {
        title: "Processos",
        image: SEI,
        alt: "SEI",
    },
    {
        title: "Confecção de documentos",
        image: compras,
        alt: "ComprasNet",
    },
    {
        title: "PNCP da Operação Acolhida",
        image: pncp,
        alt: "PNCP",
    },
    {
        title: "Pesquisa de Pregões",
        image: compras,
        alt: "ComprasNet",
    },
    {
        title: "Controle de Processos",
        image: sheets,
        alt: "Google Sheets",
    },
    ];  

    return (
        <div className="grid px-8 md:px-0 md:max-w-5xl md:mx-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {cards.map((card, index) => (
            <div
            key={card.title}
            className={`
                bg-[#003049] rounded-xl p-5 flex flex-col items-center justify-center
                text-center text-white shadow-lg
                hover:bg-[#01456d] hover:-translate-y-1
                transition-all duration-300 cursor-pointer

                ${
                index === cards.length - 1
                    ? "col-span-2 justify-self-center w-1/2 md:col-span-1 md:w-full"
                    : ""
                }
            `}
            >
            <img
                src={card.image}
                alt={card.alt}
                className="w-16 h-16 object-contain mb-3"
            />

            <span className="text-sm font-semibold leading-5">
                {card.title}
            </span>
            </div>
        ))}
        </div>
    )
}

export default AcessMore