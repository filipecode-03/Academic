import Calc from './Calc';
import type { CartItem } from '../types/cart';

interface ContentProps {
    setCartItems: React.Dispatch<
        React.SetStateAction<CartItem[]>
    >;
}

function Content({
    setCartItems,
}: ContentProps) {
    return (
        <div className="p-8">
            <h2 className="font-semibold tracking-[1px] text-orange-500">
                SNEAKER COMPANY
            </h2>

            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
                Fall Limited Edition Sneakers
            </h1>

            <p className="mt-6 text-gray-500">
                These low-profile sneakers are your
                perfect casual wear companion.
                Featuring a durable rubber outer
                sole, they’ll withstand everything
                the weather can offer.
            </p>

            <Calc
                setCartItems={setCartItems}
            />
        </div>
    );
}

export default Content;