import logoWhite from '../src/assets/images/logo-bookmark-white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="bg-[#242946] p-8 text-white">
            <img src={logoWhite} alt="logo" className='mx-auto' />
            <div className='flex flex-col text-center mt-8 gap-5 font-light tracking-[1px] text-[14px]'>
                <a href="#">FEATURES</a>
                <a href="#">PRICING</a>
                <a href="#">CONTACT</a>
            </div>
            <div className='flex justify-center gap-5 text-[25px] mt-8'>
                <FontAwesomeIcon icon={faSquareFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
            </div>
        </footer>
    )
}

export default Footer