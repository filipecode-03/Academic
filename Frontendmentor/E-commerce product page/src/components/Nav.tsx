import logo from '../assets/images/logo.svg'
import user from '../assets/images/image-avatar.png'
import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Nav({ isMenuOpen, setIsMenuOpen }: NavProps) {
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative flex items-center justify-between p-4 bg-white shadow-md md:p-6 lg:p-8">
            <div className="flex items-center space-x-4">
                <Menu className="cursor-pointer md:hidden" onClick={toggleMenu} />
                <img src={logo} alt="logo" className="h-5 md:h-6" />
                <ul className="hidden md:flex space-x-4 ml-6 text-gray-600">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4">
                <ShoppingCart className="cursor-pointer" />
                <img src={user} alt="user-avatar" className="h-8 w-8 rounded-full cursor-pointer hover:ring-2 hover:ring-orange-500" />
            </div>
            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-2/3 bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                transition-transform duration-300 ease-in-out md:hidden`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-8">
                    <X className="cursor-pointer text-gray-500 mb-8" onClick={toggleMenu} />
                    <ul className="flex flex-col space-y-4 text-lg font-bold text-gray-800">
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 bg-opacity-75 z-40 md:hidden"
                    onClick={toggleMenu}
                ></div>
            )}
        </nav>
    );
}

export default Nav