import logoLight from '../src/assets/images/logo-light.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faSquareFacebook, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className='bg-[#2D314E] text-center py-15 text-white lg:flex lg:justify-between lg:px-30'>
            <div>
                <img src={logoLight} alt="logo" className='mx-auto' />
                <div className='flex gap-3 justify-center text-[22px] mt-7'>
                    <FontAwesomeIcon icon={faSquareFacebook} className='cursor-pointer'/>
                    <FontAwesomeIcon icon={faYoutube} className='cursor-pointer'/>
                    <FontAwesomeIcon icon={faTwitter} className='cursor-pointer'/>
                    <FontAwesomeIcon icon={faPinterest} className='cursor-pointer'/>
                    <FontAwesomeIcon icon={faInstagram} className='cursor-pointer'/>
                </div>
            </div>
            <div className='flex flex-col lg:text-left gap-2 mt-6 lg:mt-0 text-[15px]'>
                <a href="#" className='lg:w-fit hover:text-green-400'>About Us</a>
                <a href="#" className='lg:w-fit hover:text-green-400'>Contact</a>
                <a href="#" className='lg:w-fit hover:text-green-400'>Blog</a>
            </div>
            <div className='flex flex-col lg:text-left gap-2 mt-2 lg:mt-0 text-[15px]'>
                <a href="#" className='lg:w-fit hover:text-green-400'>Careers</a>
                <a href="#" className='lg:w-fit hover:text-green-400'>Support</a>
                <a href="#" className='lg:w-fit hover:text-green-400'>Privacy Policy</a>
            </div>
            <div className='mt-6 lg:mt-0'>
                <button className='bg-linear-to-r from-[#2BBBC4] to-[#34CF65] p-2.5 px-8 font-semibold rounded-full shadow-2xl transition duration-300 hover:brightness-110 cursor-pointer'>Request Invite</button>
                <p className='text-gray-400 mt-5'>&copy; Digitalbank. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer