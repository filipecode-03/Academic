import logoWhite from '../src/assets/images/logo-bookmark-white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="bg-[#242946] p-8 lg:px-40 text-white lg:flex lg:items-center">
            <img src={logoWhite} alt="logo" className='mx-auto lg:mx-0' />
            <div className='flex flex-col lg:ml-20 lg:flex-row lg:gap-10 text-center mt-8 lg:mt-0 gap-5 font-light tracking-[1px] text-[14px] lg:text-[13px]'>
                <a href="#" className='w-fit mx-auto hover:text-[#FB5859]'>FEATURES</a>
                <a href="#" className='w-fit mx-auto hover:text-[#FB5859]'>PRICING</a>
                <a href="#" className='w-fit mx-auto hover:text-[#FB5859]'>CONTACT</a>
            </div>
            <div className='flex justify-center gap-5 text-[25px] mt-8 lg:mt-0 lg:ml-auto'>
                <FontAwesomeIcon icon={faSquareFacebook} className='cursor-pointer hover:text-[#FB5859]' />
                <FontAwesomeIcon icon={faTwitter} className='cursor-pointer hover:text-[#FB5859]' />
            </div>
        </footer>
    )
}

export default Footer