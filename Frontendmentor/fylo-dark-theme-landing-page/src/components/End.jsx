import logo from '../assets/images/logo.svg'
import iconLocation from '../assets/images/icon-location.svg'
import iconPhone from '../assets/images/icon-phone.svg'
import iconEmail from '../assets/images/icon-email.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'


function End() {
    return (
        <footer className='bg-[#0C1524] pt-70 p-8'>
            <div>
                <img src={logo} alt="logo" />
                <div className='mt-10'>
                    <div className='flex items-start gap-8'>
                        <img src={iconLocation} alt="location" className='mt-2' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className='mt-4 space-y-4'>
                        <div className='flex items-start gap-7'>
                            <img src={iconPhone} alt="phone" className='mt-0.5' />
                            <p>+1-543-123-4567</p>
                        </div>
                        <div className='flex items-start gap-7'>
                            <img src={iconEmail} alt="email" className='mt-1' />
                            <p>example@fylo.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-15 space-y-3 text-gray-200'>
                <a href="#" className='hover:text-white w-fit'>About Us</a>
                <a href="#" className='hover:text-white w-fit'>Jobs</a>
                <a href="#" className='hover:text-white w-fit'>Press</a>
                <a href="#" className='hover:text-white w-fit'>Blog</a>
            </div>
            <div className='flex flex-col mt-10 space-y-3 text-gray-200'>
                <a href="#" className='hover:text-white w-fit'>Contact</a>
                <a href="#" className='hover:text-white w-fit'>Terms</a>
                <a href="#" className='hover:text-white w-fit'>Privacy</a>
            </div>
            <div className='flex gap-3 justify-center mt-15'>
                <FontAwesomeIcon icon={faFacebookF} className='border hover:text-[#5FE0D7] cursor-pointer rounded-full p-1.5 py-2' />
                <FontAwesomeIcon icon={faTwitter} className='border hover:text-[#5FE0D7] cursor-pointer rounded-full p-1.5 py-2' />
                <FontAwesomeIcon icon={faInstagram} className='border hover:text-[#5FE0D7] cursor-pointer rounded-full p-1.5 py-2' />
            </div>
        </footer>
    )
}

export default End