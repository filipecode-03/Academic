import logoDark from '../src/assets/images/logo-dark.svg'
import menu from '../src/assets/images/icon-hamburger.svg'

function Nav() {
    return (
        <nav className='absolute z-11 bg-white w-full flex items-center justify-between p-8'>
            <img src={logoDark} alt="logo" />
            <img src={menu} alt="menu" />
        </nav>
    )
}

export default Nav