import logo from '../../assets/images/logoFooter.svg'
import {
  faSquareFacebook,
  faSquareYoutube,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from '../Form'

function Desktop() {
    return (
        <div className='flex items-start justify-between'>
            <div>
                <img src={logo} alt="logo" className='mx-auto' />
                <div className="flex items-center justify-center mt-15 gap-3 text-[20px]">
                    <FontAwesomeIcon icon={faSquareFacebook} className="hover:text-[#F3613C] cursor-pointer" />
                    <FontAwesomeIcon icon={faSquareYoutube} className="hover:text-[#F3613C] cursor-pointer" />
                    <FontAwesomeIcon icon={faTwitter} className="hover:text-[#F3613C] cursor-pointer" />
                    <FontAwesomeIcon icon={faPinterest} className="hover:text-[#F3613C] cursor-pointer" />
                    <FontAwesomeIcon icon={faInstagram} className="hover:text-[#F3613C] cursor-pointer" />
                </div>
            </div>
            <div className='flex gap-45 text-[14px]'>
                <ul className="flex flex-col gap-3">
                    <li className="hover:text-[#F3613C] cursor-pointer w-fit">Home</li>
                    <li className="hover:text-[#F3613C] cursor-pointer w-fit">Pricing</li>
                    <li className="hover:text-[#F3613C] cursor-pointer w-fit">Products</li>
                    <li className="hover:text-[#F3613C] cursor-pointer w-fit">About Us</li>
                </ul>
                <ul className="flex flex-col gap-3">
                    <li className="hover:text-[#F3613C] cursor-pointer w-fit">Careers</li>
                    <li className="hover:text-[#F3613C] cursor-pointer w-fit">Community</li>
                    <li className="hover:text-[#F3613C] cursor-pointer w-fit">Privacy Plicy</li>
                </ul>
            </div>
            <div>
                <Form />
                <p className="text-gray-400 text-right mt-15 text-[14px]">Copyright 2020. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Desktop