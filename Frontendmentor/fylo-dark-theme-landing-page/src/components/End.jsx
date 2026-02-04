import logo from '../assets/images/logo.svg'
import iconLocation from '../assets/images/icon-location.svg'
import iconPhone from '../assets/images/icon-phone.svg'
import iconEmail from '../assets/images/icon-email.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'


function End() {
    return (
        <footer className="bg-[#0C1524] pt-70 px-8 pb-12 lg:px-24 lg:pb-20">
            <img src={logo} alt="logo" className='w-50' />
            <div className='mt-10'>
                <div className='flex items-start gap-5'>
                    <img src={iconLocation} alt="location" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div>
                    <div className='flex items-center gap-4'>
                        <img src={iconPhone} alt="phone" />
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={iconEmail} alt="email" />
                        <p>example@fylo.com</p>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default End