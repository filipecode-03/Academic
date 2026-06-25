import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import user from '../assets/images/image-avatar.png';

import {
    ShoppingCart,
    Menu,
    X,
} from 'lucide-react';

import Cart from './Cart';
import type { CartItem } from '../types/cart';

interface NavProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;

    cartItems: CartItem[];

    setCartItems: React.Dispatch<
        React.SetStateAction<CartItem[]>
    >;
}

function Nav({
    isMenuOpen,
    setIsMenuOpen,
    cartItems,
    setCartItems,
}: NavProps) {
    const [isCartOpen, setIsCartOpen] =
        useState(false);

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

    const totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

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
                        <Menu className="text-gray-700" />
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
                    {/* Cart */}
                    <div className="relative flex items-center">
                        <button
                            type="button"
                            aria-label="Shopping cart"
                            onClick={() =>
                                setIsCartOpen(
                                    !isCartOpen
                                )
                            }
                            className="text-gray-500 transition-colors hover:text-gray-900"
                        >
                            <ShoppingCart className="h-6 w-6 cursor-pointer" />
                        </button>

                        {/* Badge */}
                        {totalQuantity > 0 && (
                            <span
                                className="
                                    absolute
                                    -right-2
                                    -top-2
                                    rounded-full
                                    bg-orange-500
                                    px-2
                                    py-px
                                    text-[10px]
                                    font-bold
                                    text-white
                                "
                            >
                                {totalQuantity}
                            </span>
                        )}

                        {/* Cart Dropdown */}
                        {isCartOpen && (
                            <Cart
                                items={cartItems}
                                setCartItems={
                                    setCartItems
                                }
                            />
                        )}
                    </div>

                    {/* Avatar */}
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
                    isMenuOpen
                        ? 'translate-x-0'
                        : '-translate-x-full'
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

            {/* Overlay Mobile */}
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