import logo from '../src/assets/images/logo-bookmark.svg'
import menu from '../src/assets/images/icon-hamburger.svg'

function Nav() {
    return (
        <nav className='p-8'>
            <div className='flex items-center justify-between'>
                <img src={logo} alt="logo" />
                <img src={menu} alt="menu" />
            </div>
        </nav>
    )
}

export default Nav