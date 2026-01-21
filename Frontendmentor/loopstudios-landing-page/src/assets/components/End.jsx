import logo from '../images/logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faSquareFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'

function End() {
    return (
        <footer className='bg-black py-15 text-white text-center'>
            <img src={logo} alt="logo" className='mx-auto' />
            <div className='mt-10 space-y-6'>
                <p>About</p>
                <p>Careers</p>
                <p>Events</p>
                <p>Products</p>
                <p>Support</p>
            </div>
            <div className='text-[30px] space-x-3 mt-10'>
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faInstagram} />
            </div>
            <p className='text-gray-400 mt-2 text-[18px]'>&copy; 2021 Loopstudios. All rights reserved.</p>
        </footer>
    )
}

export default End