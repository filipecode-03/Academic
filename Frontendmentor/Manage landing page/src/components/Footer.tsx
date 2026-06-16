import {
  faSquareFacebook,
  faSquareYoutube,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../assets/images/logoFooter.svg'
import Form from './Form.tsx'

function Footer() {
    return (
        <footer className="bg-[#1E1E26] text-white p-8">
            <Form />
            <div className="flex gap-20 justify-center mt-10">
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
            <div className="flex items-center justify-center gap-6 text-[38px] mt-10">
                <FontAwesomeIcon icon={faSquareFacebook} className="hover:text-[#F3613C] cursor-pointer" />
                <FontAwesomeIcon icon={faSquareYoutube} className="hover:text-[#F3613C] cursor-pointer" />
                <FontAwesomeIcon icon={faTwitter} className="hover:text-[#F3613C] cursor-pointer" />
                <FontAwesomeIcon icon={faPinterest} className="hover:text-[#F3613C] cursor-pointer" />
                <FontAwesomeIcon icon={faInstagram} className="hover:text-[#F3613C] cursor-pointer" />
            </div>
            <img src={logo} alt="logo" className="mx-auto mt-10" />
            <p className="text-center text-gray-400 mt-10">Copyright 2020. All Rights Reserved</p>
        </footer>
    )
}

export default Footer