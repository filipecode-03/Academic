import logo from '../assets/images/logo.svg'

function NavBar() {
    return (
        <nav className='flex bg-[#27314b] justify-between items-center p-8'>
            <img src={logo} alt="logo" className='w-30' />
            <div className='flex gap-8 text-gray-200'>
                <a href="#" className='hover:underline hover:text-white'>Features</a>
                <a href="#" className='hover:underline hover:text-white'>Team</a>
                <a href="#" className='hover:underline hover:text-white'>Sign In</a>
            </div>
        </nav>
    )
}

export default NavBar