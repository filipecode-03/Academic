import { Search, Menu } from 'lucide-react';

function Header() {
    return (
        <header>
            <section className="py-6.5 px-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Menu size={20} />
                    <a href="#" className="font-bold hidden lg:block">Menu</a>
                </div>
                <h1 className="text-[#60A5FA] text-[24px] font-extrabold">TECH NEWS</h1>
                <div className="flex items-center gap-2">
                    <a href="#" className="font-bold hidden lg:block">Buscar</a>
                    <Search size={20} />
                </div>
            </section>
            <div className='hidden lg:block'>
                <nav className="flex py-3.5 px-8 items-center justify-between border-t border-b border-gray-800">
                    <a href="#">Inteligência Artificial</a>
                    <a href="#">Blockchain</a>
                    <a href="#">Hologramas</a>
                    <a href="#">Internet</a>
                    <a href="#">Vestíveis</a>
                    <a href="#">Realidade Aumentada</a>
                    <a href="#">Realidade Virtual</a>
                </nav>
            </div>
        </header>
    )
}

export default Header