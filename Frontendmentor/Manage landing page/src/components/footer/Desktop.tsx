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
        <div className="flex items-start justify-between">
            {/* Logo + Social */}
            <div className="flex flex-col justify-between h-35">
                <img src={logo} alt="Manage Logo" />
                <div className="flex gap-3 text-[20px]">
                <FontAwesomeIcon
                    icon={faSquareFacebook}
                    className="cursor-pointer hover:text-[#F3613C] transition-colors"
                />
                <FontAwesomeIcon
                    icon={faSquareYoutube}
                    className="cursor-pointer hover:text-[#F3613C] transition-colors"
                />
                <FontAwesomeIcon
                    icon={faTwitter}
                    className="cursor-pointer hover:text-[#F3613C] transition-colors"
                />
                <FontAwesomeIcon
                    icon={faPinterest}
                    className="cursor-pointer hover:text-[#F3613C] transition-colors"
                />
                <FontAwesomeIcon
                    icon={faInstagram}
                    className="cursor-pointer hover:text-[#F3613C] transition-colors"
                />
                </div>
            </div>
            {/* Menus */}
            <div className="flex gap-28 text-[14px]">
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

            {/* Form */}
            <div className="flex flex-col items-end">
                <Form />

                <p className="mt-16 text-[14px] text-gray-400">
                Copyright 2020. All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default Desktop