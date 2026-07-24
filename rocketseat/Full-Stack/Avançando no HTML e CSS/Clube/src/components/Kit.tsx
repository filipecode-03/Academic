import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import book from '../assets/images/book.png'
import folheto01 from '../assets/images/'

function Kit() {
    return (
        <section className="px-8 py-26 text-white">
            <div className="flex items-center gap-3 justify-center">
                <FontAwesomeIcon icon={faStar} className="text-[#9446A4] text-[20px]" />
                <h2 className="text-[24px] font-bold">Conheça o kit mensal</h2>
                <FontAwesomeIcon icon={faStar} className="text-[#9446A4] text-[20px]" />
            </div>
            <h3 className="text-center">Recebe uma caixa surpresa todos os meses</h3>
            <div>

            </div>
        </section>
    )
}

export default Kit