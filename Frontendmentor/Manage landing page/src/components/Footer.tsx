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
            <div className="flex gap-20">
                <ul>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
                <ul>
                    <li>Careers</li>
                    <li>Community</li>
                    <li>Privacy Plicy</li>
                </ul>
            </div>
            <div className="flex items-center gap-4 text-3xl">
                <FontAwesomeIcon icon={faSquareFacebook} />
                <FontAwesomeIcon icon={faSquareYoutube} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            <img src={logo} alt="logo" />
            <p>Copyright 2020. All Rights Reserved</p>
        </footer>
    )
}

export default Footer