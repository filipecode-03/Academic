import logo from '../assets/images/Logo.png'

function Nav() {
    return (
        <nav className='flex px-6 lg:px-8 lg:py-6 py-4 items-center justify-between'>
            <img src={logo} alt="logo" />
            <div className='flex items-center gap-6'>
                <div className='hidden lg:block space-x-6 font-medium text-[#A1A1AA]'>
                    <a href="#">Conheça o app</a>
                    <a href="#">Funcionalidades</a>
                    <a href="#">Planos e preços</a>
                </div>
                <button className="bg-white text-black rounded-lg py-2 font-medium text-[14px] px-4 lg:px-6 lg:py-3">
                    Baixar Agora
                </button>
            </div>
        </nav>
    )
}

export default Nav