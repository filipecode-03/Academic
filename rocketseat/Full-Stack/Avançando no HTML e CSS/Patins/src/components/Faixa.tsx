import faixaStart from '../assets/images/FaixaStart.png'
import faixaEnd from '../assets/images/FaixaMiddle.png'

function Faixa() {
    return (
        <div className="overflow-hidden py-10">
            <div className="flex w-max animate-marquee">
                <img src={faixaStart} alt="faixa Start" />
                <img src={faixaEnd} alt="faixa End" />

                {/* Duplicação */}
                <img src={faixaStart} alt="" aria-hidden="true" />
                <img src={faixaEnd} alt="" aria-hidden="true" />
            </div>
        </div>
    )
}

export default Faixa