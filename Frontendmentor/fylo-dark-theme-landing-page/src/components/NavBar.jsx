import logo from '../assets/images/logo.svg'

function NavBar() {
    return (
        <nav className='flex justify-between items-center p-8'>
            <img src={logo} alt="logo" className='' />
            <div className='flex gap-6'>
                <a href="#">Features</a>
                <a href="#">Team</a>
                <a href="#">Sign In</a>
            </div>
        </nav>
    )
}

export default NavBar