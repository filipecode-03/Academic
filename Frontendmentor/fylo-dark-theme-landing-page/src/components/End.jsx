import logo from '../assets/images/logo.svg'
import iconLocation from '../assets/images/icon-location.svg'
import iconPhone from '../assets/images/icon-phone.svg'
import iconEmail from '../assets/images/icon-email.svg'

function End() {
    return (
        <footer className='bg-[#0C1524] pt-70 p-8'>
            <div>
                <img src={logo} alt="logo" />
                <div className='mt-10'>
                    <div className='flex items-start gap-8'>
                        <img src={iconLocation} alt="location" className='mt-2' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className='mt-4 space-y-4'>
                        <div className='flex items-start gap-7'>
                            <img src={iconPhone} alt="phone" className='mt-0.5' />
                            <p>+1-543-123-4567</p>
                        </div>
                        <div className='flex items-start gap-7'>
                            <img src={iconEmail} alt="email" className='mt-1' />
                            <p>example@fylo.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a href="#">About Us</a>
                <a href="#">Jobs</a>
                <a href="#">Press</a>
                <a href="#">Blog</a>
            </div>
            <div>
                <a href="#">Contact</a>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
            </div>
            <div>

            </div>
        </footer>
    )
}

export default End