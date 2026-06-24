import { Trash2 } from 'lucide-react';
import type { CartItem } from '../types/cart';

interface CartProps {
    items: CartItem[];
    setCartItems: React.Dispatch<
        React.SetStateAction<CartItem[]>
    >;
}

function Cart({
    items,
    setCartItems,
}: CartProps) {
    const removeItem = (id: number) => {
        setCartItems((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    return (
        <div className="absolute right-0 top-16 z-50 w-90 rounded-xl bg-white shadow-2xl">
            <div className="border-b p-6">
                <h2 className="font-bold text-black">
                    Cart
                </h2>
            </div>

            {items.length === 0 ? (
                <div className="flex h-48 items-center justify-center">
                    <p className="font-bold text-gray-500">
                        Your cart is empty.
                    </p>
                </div>
            ) : (
                <div className="p-6">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="mb-6 flex items-center gap-4"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-12 w-12 rounded"
                            />

                            <div className="flex-1">
                                <p className="text-gray-500">
                                    {item.title}
                                </p>

                                <p className="text-gray-500">
                                    ${item.price.toFixed(2)} x{' '}
                                    {item.quantity}

                                    <span className="ml-2 font-bold text-black">
                                        $
                                        {(
                                            item.price *
                                            item.quantity
                                        ).toFixed(2)}
                                    </span>
                                </p>
                            </div>

                            <button
                                onClick={() =>
                                    removeItem(item.id)
                                }
                            >
                                <Trash2
                                    size={18}
                                    className="text-gray-400 hover:text-red-500"
                                />
                            </button>
                        </div>
                    ))}

                    <button className="w-full rounded-lg bg-orange-500 py-4 font-bold text-white transition hover:bg-orange-600">
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cart;