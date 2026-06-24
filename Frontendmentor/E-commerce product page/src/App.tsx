import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import ProductImages from './components/ProductImages';
import Content from './components/Content';
import type { CartItem } from './types/cart';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isMenuOpen]);

    return (
        <div className="font-['Kumbh_Sans']">
            <Nav
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />

            <main className="container lg:max-w-6xl mx-auto pb-8 md:flex md:items-center md:justify-center md:gap-16 md:px-4 md:py-8">
                <ProductImages />

                <Content
                    setCartItems={setCartItems}
                />
            </main>
        </div>
    );
}

export default App;