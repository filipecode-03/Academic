import logo from '../assets/images/logo-symbol.png'

function Nav() {
    return (
        <nav className='flex items-center justify-between p-5'>
            <img src={logo} alt="logo" />
            <button className='bg-[#7D298A] runde px-5 py-2 rounded-lg text-white'>Assinar</button>
        </nav>
    )
}

export default Nav