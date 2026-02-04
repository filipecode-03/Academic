import logo from '../assets/images/logo.svg'

function NavBar() {
    return (
        <nav className='flex bg-[#27314b] justify-between items-center p-8 lg:p-14 lg:px-24'>
            <img src={logo} alt="logo" className='w-30 lg:w-40' />
            <div className='flex gap-8 lg:gap-12 text-gray-200'>
                <a href="#" className='hover:underline hover:text-white'>Features</a>
                <a href="#" className='hover:underline hover:text-white'>Team</a>
                <a href="#" className='hover:underline hover:text-white'>Sign In</a>
            </div>
        </nav>
    )
}

export default NavBar