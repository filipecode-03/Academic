import image01 from '../assets/images/Image 01.png'
import image02 from '../assets/images/Image 02.png'
import image03 from '../assets/images/Image 03.png'
import image04 from '../assets/images/Image 04.png'
import image05 from '../assets/images/Image 05.png'
import image06 from '../assets/images/Image 06.png'
import image07 from '../assets/images/Image 07.png'
import image08 from '../assets/images/Image 08.png'
import image09 from '../assets/images/Image 09.png'
import image10 from '../assets/images/Image 10.png'
import image11 from '../assets/images/Image 11.png'
import image12 from '../assets/images/Image 12.png'

function Photos() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4">
            <img src={image01} alt="01" />
            <img src={image02} alt="02" />
            <img src={image03} alt="03" />
            <img src={image04} alt="04" />
            <img src={image05} alt="05" />
            <img src={image06} alt="06" />
            <img src={image07} alt="07" />
            <img src={image08} alt="08" />
            <img src={image09} alt="09" />
            <img src={image10} alt="10" />
            <img src={image11} alt="11" />
            <img src={image12} alt="12" />
        </section>
    )
}

export default Photos