import React from 'react';
import logo from '../assets/images/logo.svg';
import user from '../assets/images/image-avatar.png';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Nav({ isMenuOpen, setIsMenuOpen }: NavProps) {
    const navLinks = [
        'Collections',
        'Men',
        'Women',
        'About',
        'Contact',
    ];

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            <nav className="relative mx-auto flex max-w-6xl items-center justify-between border-b border-gray-200 bg-white px-6 py-6">
                {/* Left Side */}
                <div className="flex items-center">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Open menu"
                        className="mr-4 md:hidden"
                    >
                        <Menu className="h-6 w-6 text-gray-700" />
                    </button>

                    <img
                        src={logo}
                        alt="Sneakers"
                        className="h-5 cursor-pointer"
                    />

                    {/* Desktop Navigation */}
                    <ul className="ml-12 hidden items-center gap-8 text-sm text-gray-500 md:flex">
                        {navLinks.map((link) => (
                            <li
                                key={link}
                                className="cursor-pointer border-b-4 border-transparent py-8 transition-all duration-200 hover:border-orange-500 hover:text-gray-900"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                    <button
                        type="button"
                        aria-label="Shopping cart"
                        className="text-gray-500 transition-colors hover:text-gray-900"
                    >
                        <ShoppingCart className="h-6 w-6" />
                    </button>

                    <img
                        src={user}
                        alt="User avatar"
                        className="h-10 w-10 cursor-pointer rounded-full transition-all hover:ring-2 hover:ring-orange-500 md:h-12 md:w-12"
                    />
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 z-50 h-full w-62.5 bg-white transition-transform duration-300 ease-in-out md:hidden ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="p-6">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Close menu"
                        className="mb-12"
                    >
                        <X className="h-6 w-6 text-gray-500" />
                    </button>

                    <ul className="flex flex-col gap-5 text-lg font-bold text-gray-900">
                        {navLinks.map((link) => (
                            <li
                                key={link}
                                className="cursor-pointer transition-colors hover:text-orange-500"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/75 md:hidden"
                    onClick={toggleMenu}
                    aria-hidden="true"
                />
            )}
        </>
    );
}

export default Nav;