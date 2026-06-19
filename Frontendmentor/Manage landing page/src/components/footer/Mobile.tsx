import {
  faSquareFacebook,
  faSquareYoutube,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../assets/images/logoFooter.svg'
import Form from '../Form.tsx'

function Mobile() {
    return (
        <div>
            <Form />
            <div className="mt-10 flex w-full justify-around">
                <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer hover:text-[#F3613C]">
                        Home
                    </li>
                    <li className="cursor-pointer hover:text-[#F3613C]">
                        Pricing
                    </li>
                    <li className="cursor-pointer hover:text-[#F3613C]">
                        Products
                    </li>
                    <li className="cursor-pointer hover:text-[#F3613C]">
                        About Us
                    </li>
                </ul>
                <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer hover:text-[#F3613C]">
                        Careers
                    </li>
                    <li className="cursor-pointer hover:text-[#F3613C]">
                        Community
                    </li>
                    <li className="cursor-pointer hover:text-[#F3613C]">
                        Privacy Policy
                    </li>
                </ul>
            </div>
            <div className="mt-12 flex justify-center gap-6 text-[30px]">
                <FontAwesomeIcon icon={faSquareFacebook} className="hover:text-[#F3613C] cursor-pointer" />
                <FontAwesomeIcon icon={faSquareYoutube} className="hover:text-[#F3613C] cursor-pointer" />
                <FontAwesomeIcon icon={faTwitter} className="hover:text-[#F3613C] cursor-pointer" />
                <FontAwesomeIcon icon={faPinterest} className="hover:text-[#F3613C] cursor-pointer" />
                <FontAwesomeIcon icon={faInstagram} className="hover:text-[#F3613C] cursor-pointer" />
            </div>
            <img
                src={logo}
                alt="Manage Logo"
                className="mx-auto mt-12"
            />
            <p className="mt-12 text-center text-gray-400 text-sm">
                Copyright 2020. All Rights Reserved
            </p>
        </div>
    )
}

export default Mobile