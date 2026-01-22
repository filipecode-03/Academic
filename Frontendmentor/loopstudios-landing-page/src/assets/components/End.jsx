import logo from '../images/logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faSquareFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'

function End() {
    return (
        <footer className='bg-black py-15 text-white text-center'>
            <img src={logo} alt="logo" className='mx-auto' />
            <div className='mt-10 space-y-6'>
                <p className='w-fit mx-auto relative cursor-pointer text-white
                after:content-[""] after:absolute after:left-5.5 after:-bottom-2
                after:h-0.5 after:w-0 hover:after:w-5 after:bg-white after:-translate-x-1/2
                after:transition-all after:duration-300'>About</p>
                <p className='w-fit mx-auto relative cursor-pointer text-white
                after:content-[""] after:absolute after:left-7 after:-bottom-2
                after:h-0.5 after:w-0 hover:after:w-5 after:bg-white after:-translate-x-1/2
                after:transition-all after:duration-300'>Careers</p>
                <p className='w-fit mx-auto relative cursor-pointer text-white
                after:content-[""] after:absolute after:left-5.5 after:-bottom-2
                after:h-0.5 after:w-0 hover:after:w-5 after:bg-white after:-translate-x-1/2
                after:transition-all after:duration-300'>Events</p>
                <p className='w-fit mx-auto relative cursor-pointer text-white
                after:content-[""] after:absolute after:left-7.5 after:-bottom-2
                after:h-0.5 after:w-0 hover:after:w-5 after:bg-white after:-translate-x-1/2
                after:transition-all after:duration-300'>Products</p>
                <p className='w-fit mx-auto relative cursor-pointer text-white
                after:content-[""] after:absolute after:left-7 after:-bottom-2
                after:h-0.5 after:w-0 hover:after:w-5 after:bg-white after:-translate-x-1/2
                after:transition-all after:duration-300'>Support</p>
            </div>
            <div className='text-[30px] space-x-3 mt-10'>
                <span className="relative inline-flex cursor-pointer
                    after:content-[''] after:absolute after:-bottom-2 after:left-1/2
                    after:w-0 after:h-0.5 after:bg-white
                    after:-translate-x-1/2 after:transition-all after:duration-300
                    hover:after:w-7">
                    <FontAwesomeIcon icon={faSquareFacebook} />
                </span>
                <span className="relative inline-flex cursor-pointer
                    after:content-[''] after:absolute after:-bottom-2 after:left-1/2
                    after:w-0 after:h-0.5 after:bg-white
                    after:-translate-x-1/2 after:transition-all after:duration-300
                    hover:after:w-7">
                    <FontAwesomeIcon icon={faTwitter} />
                </span>
                <span className="relative inline-flex cursor-pointer
                    after:content-[''] after:absolute after:-bottom-2 after:left-1/2
                    after:w-0 after:h-0.5 after:bg-white
                    after:-translate-x-1/2 after:transition-all after:duration-300
                    hover:after:w-7">
                    <FontAwesomeIcon icon={faPinterest} />
                </span>
                <span className="relative inline-flex cursor-pointer
                    after:content-[''] after:absolute after:-bottom-2 after:left-1/2
                    after:w-0 after:h-0.5 after:bg-white
                    after:-translate-x-1/2 after:transition-all after:duration-300
                    hover:after:w-7">
                    <FontAwesomeIcon icon={faInstagram} />
                </span>
            </div>
            <p className='text-gray-400 mt-2 text-[18px]'>&copy; 2021 Loopstudios. All rights reserved.</p>
        </footer>
    )
}

export default End