import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import book from '../assets/images/book.png'
import folheto01 from '../assets/images/bookmark-yellow.png'
import folheto02 from '../assets/images/bookmark-purple.png'
import pin from '../assets/images/pin.png'
import arrowFolheto from '../assets/images/arrowFolheto.png'
import arrowBook from '../assets/images/arrowBook.png'
import arrowPin from '../assets/images/arrowPin.png'

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
                <img src={book} alt="book" />
                <div>
                    <p>Livro em capa dura</p>
                    <img src={arrowBook} alt="arrowBook" />
                </div>
                <img src={folheto01} alt="folheto01" />
                <img src={folheto02} alt="folheto02" />
                <div>
                    <img src={arrowFolheto} alt="arrowFolheto" />
                    <p>Marca páginas temático</p>
                </div>
                <p>Broche exclusivo</p>
                <img src={arrowPin} alt="arrowPin" />
                <img src={pin} alt="pin" />
            </div>
        </section>
    )
}

export default Kit