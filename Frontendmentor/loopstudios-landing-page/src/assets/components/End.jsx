import logo from '../images/logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faSquareFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'

function End() {
    return (
        <footer className='bg-black mt-20 lg:mt-0 py-15 lg:px-40 text-white text-center lg:flex lg:justify-between'>
            <div>
                <img src={logo} alt="logo" className='mx-auto lg:mx-0' />
                <div className='mt-10 lg:mt-5 space-y-6 flex flex-col lg:flex-row lg:gap-8'>
                    <p className='relative mx-auto lg:mx-0 w-fit inline-flex cursor-pointer
                        after:content-[""] after:absolute after:-bottom-2 after:left-1/2
                        after:w-0 after:h-0.5 after:bg-white
                        after:-translate-x-1/2 after:transition-all after:duration-300
                        hover:after:w-7'>About</p>
                    <p className='relative mx-auto lg:mx-0 w-fit inline-flex cursor-pointer
                        after:content-[""] after:absolute after:-bottom-2 after:left-1/2
                        after:w-0 after:h-0.5 after:bg-white
                        after:-translate-x-1/2 after:transition-all after:duration-300
                        hover:after:w-7'>Careers</p>
                    <p className='relative mx-auto lg:mx-0 w-fit inline-flex cursor-pointer
                        after:content-[""] after:absolute after:-bottom-2 after:left-1/2
                        after:w-0 after:h-0.5 after:bg-white
                        after:-translate-x-1/2 after:transition-all after:duration-300
                        hover:after:w-7'>Events</p>
                    <p className='relative mx-auto lg:mx-0 w-fit inline-flex cursor-pointer
                        after:content-[""] after:absolute after:-bottom-2 after:left-1/2
                        after:w-0 after:h-0.5 after:bg-white
                        after:-translate-x-1/2 after:transition-all after:duration-300
                        hover:after:w-7'>Products</p>
                    <p className='relative mx-auto lg:mx-0 w-fit inline-flex cursor-pointer
                        after:content-[""] after:absolute after:-bottom-2 lg:after:bottom-4 after:left-1/2
                        after:w-0 after:h-0.5 after:bg-white
                        after:-translate-x-1/2 after:transition-all after:duration-300
                        hover:after:w-7'>Support</p>
                </div>
            </div>
            <div>
                <div className='text-[30px] space-x-3 mt-10 lg:mt-0 lg:flex lg:justify-end'>
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
                <p className='text-gray-400 mt-2 lg:mt-4 text-[18px]'>&copy; 2021 Loopstudios. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default End