import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-hamburger.svg'

function Nav() {
    return (
        <nav className="bg-[url('./assets/images/image-hero-mobile.jpg')] bg-cover h-100">
            <div className='p-10 flex justify-between items-center'>
                <img src={logo} alt="logo" />
                <img src={menu} alt="menu" />
            </div>
        </nav>
    )
}

export default Nav