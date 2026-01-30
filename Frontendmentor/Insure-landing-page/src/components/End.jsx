import logo from '../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faSquareFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'

function End() {
    return (
        <footer className='py-20 text-center p-8 bg-[#FAFAFA] bg-[url("./assets/images/bg-pattern-footer-mobile.svg")] bg-no-repeat bg-top bg-[size:100%_auto]'>
            <img src={logo} alt="logo" className='mx-auto' />
            <div className='flex items-center justify-center gap-2 mt-5 text-[28px]'>
                <FontAwesomeIcon icon={faSquareFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            <hr />
            <h1>OUR COMPANY</h1>
            <div>
                <p>HOW WE WORK</p>
                <p>WHY INSURE?</p>
                <p></p>
                <p></p>
            </div>
            <h1>HELP ME</h1>
            <div>
                <p>FAQ</p>
                <p>TERMS OF USE</p>
                <p>PRIVACY POLICY</p>
                <p>COOKIES</p>
            </div>
            <h1>CONTACT</h1>
            <div>
                <p>SALES</p>
                <p>SUPPORT</p>
                <p>LIVE CHAT</p>
            </div>
            <h1>OTHERS</h1>
            <div>
                <p>CAREERS</p>
                <p>PRESS</p>
                <p>LICENSES</p>
            </div>
        </footer>
    )
}

export default End