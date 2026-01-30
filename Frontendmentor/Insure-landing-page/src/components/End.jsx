import logo from '../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faSquareFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'

function End() {
    return (
        <footer className='tracking-[1px] py-35 text-center p-8 bg-[#FAFAFA] bg-[url("./assets/images/bg-pattern-footer-mobile.svg")] bg-no-repeat bg-top bg-[size:100%_auto]'>
            <img src={logo} alt="logo" className='mx-auto' /> 
            <div className='flex items-center justify-center text-gray-600 gap-2 mt-8 text-[28px]'>
                <FontAwesomeIcon icon={faSquareFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            <hr className='text-gray-300 border my-10' />
            <h1 className='text-gray-500 font-medium text-[15px]'>OUR COMPANY</h1>
            <div className='my-8 space-y-1 font-semibold'>
                <p>HOW WE WORK</p>
                <p>WHY INSURE?</p>
                <p>CHECK PRICE</p>
                <p>REVIEWS</p>
            </div>
            <h1 className='text-gray-500 font-medium text-[15px]'>HELP ME</h1>
            <div className='my-8 space-y-1 font-semibold'>
                <p>FAQ</p>
                <p>TERMS OF USE</p>
                <p>PRIVACY POLICY</p>
                <p>COOKIES</p>
            </div>
            <h1 className='text-gray-500 font-medium text-[15px]'>CONTACT</h1>
            <div className='my-8 space-y-1 font-semibold'>
                <p>SALES</p>
                <p>SUPPORT</p>
                <p>LIVE CHAT</p>
            </div>
            <h1 className='text-gray-500 font-medium text-[15px]'>OTHERS</h1>
            <div className='mt-8 space-y-1 font-semibold'>
                <p>CAREERS</p>
                <p>PRESS</p>
                <p>LICENSES</p>
            </div>
        </footer>
    )
}

export default End