import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'

function NavBar() {
    return (
        <nav className='p-5 flex items-center justify-between'>
            <img src={logo} alt="logo" />
            <img src={hamburger} alt="menu" />
        </nav>
    )
}

export default NavBar