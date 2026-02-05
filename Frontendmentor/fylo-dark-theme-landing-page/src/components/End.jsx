import logo from '../assets/images/logo.svg'
import iconLocation from '../assets/images/icon-location.svg'
import iconPhone from '../assets/images/icon-phone.svg'
import iconEmail from '../assets/images/icon-email.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'


function End() {
    return (
        <footer className="bg-[#0C1524] pt-70 px-8 pb-12 lg:px-24 lg:pb-20 text-gray-200">
            <img src={logo} alt="logo" className='w-50' />
            <div className="mt-10 flex flex-col gap-y-10 lg:flex-row lg:items-start lg:gap-x-22">
                <div className="flex items-start gap-5 max-w-md">
                    <img src={iconLocation} alt="location" className='mt-2' />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                    <img src={iconPhone} alt="phone" />
                    <p>+1-543-123-4567</p>
                    </div>
                    <div className="flex items-center gap-4">
                    <img src={iconEmail} alt="email" />
                    <p>example@fylo.com</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <a href="#" className="w-fit hover:text-white">About Us</a>
                    <a href="#" className="w-fit hover:text-white">Jobs</a>
                    <a href="#" className="w-fit hover:text-white">Press</a>
                    <a href="#" className="w-fit hover:text-white">Blog</a>
                </div>
                <div className="flex flex-col gap-3">
                    <a href="#" className="w-fit hover:text-white">Contact Us</a>
                    <a href="#" className="w-fit hover:text-white">Terms</a>
                    <a href="#" className="w-fit hover:text-white">Privacy</a>
                </div>
                <div className="mt-10 lg:mt-0 flex gap-3 mx-auto lg:mx-0">
                    <FontAwesomeIcon icon={faFacebookF} className="border hover:border-[#5DC2BE] hover:text-[#5DC2BE] cursor-pointer rounded-full p-1.5 py-2" />
                    <FontAwesomeIcon icon={faTwitter} className="border hover:border-[#5DC2BE] hover:text-[#5DC2BE] cursor-pointer rounded-full p-1.5 py-2" />
                    <FontAwesomeIcon icon={faInstagram} className="border hover:border-[#5DC2BE] hover:text-[#5DC2BE] cursor-pointer rounded-full p-1.5 py-2" />
                </div>
            </div>
        </footer>
    )
}

export default End