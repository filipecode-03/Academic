import logo from '../assets/images/Logo.png'

function Nav() {
    return (
        <nav className='flex px-6 py-4 items-center justify-between'>
            <img src={logo} alt="logo" />
            <button className="bg-white text-black rounded-lg py-2 font-medium text-[14px] px-4">
                Baixar Agora
            </button>
        </nav>
    )
}

export default Nav