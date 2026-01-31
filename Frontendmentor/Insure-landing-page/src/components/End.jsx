import logo from '../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faSquareFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'

function End() {
    return (
        <footer className='tracking-[1px] py-35 text-center p-8 bg-[#FAFAFA] bg-[url("./assets/images/bg-pattern-footer-mobile.svg")] bg-no-repeat bg-top bg-size-[100%_auto]'>
            <img src={logo} alt="logo" className='mx-auto' /> 
            <div className='flex items-center justify-center text-gray-600 gap-2 mt-8 text-[28px]'>
                <FontAwesomeIcon icon={faSquareFacebook} className='hover:text-black cursor-pointer' />
                <FontAwesomeIcon icon={faTwitter} className='hover:text-black cursor-pointer' />
                <FontAwesomeIcon icon={faPinterest} className='hover:text-black cursor-pointer' />
                <FontAwesomeIcon icon={faInstagram} className='hover:text-black cursor-pointer' />
            </div>
            <hr className='text-gray-300 border my-10' />
            <h1 className='text-gray-500 font-medium text-[15px]'>OUR COMPANY</h1>
            <div className='my-8 space-y-1 font-semibold'>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>HOW WE WORK</p>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>WHY INSURE?</p>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>CHECK PRICE</p>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>REVIEWS</p>
            </div>
            <h1 className='text-gray-500 font-medium text-[15px]'>HELP ME</h1>
            <div className='my-8 space-y-1 font-semibold'>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>FAQ</p>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>TERMS OF USE</p>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>PRIVACY POLICY</p>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>COOKIES</p>
            </div>
            <h1 className='text-gray-500 font-medium text-[15px]'>CONTACT</h1>
            <div className='my-8 space-y-1 font-semibold'>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>SALES</p>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>SUPPORT</p>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>LIVE CHAT</p>
            </div>
            <h1 className='text-gray-500 font-medium text-[15px]'>OTHERS</h1>
            <div className='mt-8 space-y-1 font-semibold'>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>CAREERS</p>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>PRESS</p>
                <p className='hover:underline cursor-pointer w-fit mx-auto'>LICENSES</p>
            </div>
        </footer>
    )
}

export default End