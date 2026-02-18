import logoLight from '../src/assets/images/logo-light.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faSquareFacebook, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className='bg-[#2D314E] text-center py-15 text-white'>
            <div>
                <img src={logoLight} alt="logo" className='mx-auto' />
                <div className='flex gap-3 justify-center text-[22px] mt-7'>
                    <FontAwesomeIcon icon={faSquareFacebook} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faPinterest} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>
            <div className='flex flex-col gap-2 mt-6 text-[15px]'>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
            </div>
            <div className='flex flex-col gap-2 mt-2 text-[15px]'>
                <a href="#">Careers</a>
                <a href="#">Support</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div className='mt-6'>
                <button className='bg-linear-to-r from-[#2BBBC4] to-[#34CF65] p-2.5 px-8 font-semibold rounded-full shadow-2xl'>Request Invite</button>
                <p className='text-gray-400 mt-5'>&copy; Digitalbank. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer