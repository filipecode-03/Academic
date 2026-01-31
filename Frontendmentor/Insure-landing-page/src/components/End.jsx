import logo from '../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faSquareFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'

function End() {
    return (
        <footer className='tracking-[1px] py-35 lg:py-15 text-center lg:text-left p-8 lg:px-30 bg-[#FAFAFA] bg-[url("./assets/images/bg-pattern-footer-mobile.svg")] lg:bg-[url("./assets/images/bg-pattern-footer-desktop.svg")] bg-no-repeat bg-top lg:bg-top-left bg-size-[100%_auto] lg:bg-size-[35%]'>
            <div className='lg:flex lg:items-center lg:justify-between'>
                <img src={logo} alt="logo" className='mx-auto lg:mx-0' />
                <div className='flex items-center justify-center text-gray-600 gap-2 mt-8 lg:mt-0 text-[28px]'>
                    <FontAwesomeIcon icon={faSquareFacebook} className='hover:text-black cursor-pointer' />
                    <FontAwesomeIcon icon={faTwitter} className='hover:text-black cursor-pointer' />
                    <FontAwesomeIcon icon={faPinterest} className='hover:text-black cursor-pointer' />
                    <FontAwesomeIcon icon={faInstagram} className='hover:text-black cursor-pointer' />
                </div>
            </div>
            <hr className='text-gray-300 border my-10' />
            <div className='lg:flex lg:gap-50'>
                <div>
                    <h1 className='text-gray-500 font-medium text-[15px]'>OUR COMPANY</h1>
                    <div className='my-8 space-y-1 font-semibold'>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>HOW WE WORK</p>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>WHY INSURE?</p>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>CHECK PRICE</p>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>REVIEWS</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-gray-500 font-medium text-[15px]'>HELP ME</h1>
                    <div className='my-8 space-y-1 font-semibold'>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>FAQ</p>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>TERMS OF USE</p>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>PRIVACY POLICY</p>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>COOKIES</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-gray-500 font-medium text-[15px]'>CONTACT</h1>
                    <div className='my-8 space-y-1 font-semibold'>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>SALES</p>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>SUPPORT</p>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>LIVE CHAT</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-gray-500 font-medium text-[15px]'>OTHERS</h1>
                    <div className='mt-8 space-y-1 font-semibold'>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>CAREERS</p>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>PRESS</p>
                        <p className='hover:underline cursor-pointer w-fit mx-auto lg:mx-0'>LICENSES</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default End