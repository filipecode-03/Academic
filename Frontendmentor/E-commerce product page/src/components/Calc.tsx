import { useForm } from 'react-hook-form';
import { ShoppingCart } from 'lucide-react';

import imageProduct1 from '../assets/images/image-product-1-thumbnail.jpg';

import type { CartItem } from '../types/cart';

type FormData = {
    quantity: number;
};

interface CalcProps {
    setCartItems: React.Dispatch<
        React.SetStateAction<CartItem[]>
    >;
}

function Calc({
    setCartItems,
}: CalcProps) {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
    } = useForm<FormData>({
        defaultValues: {
            quantity: 0,
        },
    });

    const quantity = watch('quantity');

    const handleIncrement = () => {
        setValue(
            'quantity',
            quantity + 1
        );
    };

    const handleDecrement = () => {
        setValue(
            'quantity',
            Math.max(0, quantity - 1)
        );
    };

    const onSubmit = (
        data: FormData
    ) => {
        if (data.quantity === 0) return;

        setCartItems([
            {
                id: 1,
                title:
                    'Fall Limited Edition Sneakers',
                price: 125,
                quantity: data.quantity,
                image: imageProduct1,
            },
        ]);

        setValue('quantity', 0);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8"
        >
            {/* Price */}
            <div className="mb-8 flex items-center justify-between lg:flex-col lg:items-start lg:gap-3">
                <div className="flex items-center gap-4">
                    <p className="text-3xl font-bold">
                        $125.00
                    </p>

                    <span className="rounded-md bg-black px-2 py-1 font-bold text-white">
                        50%
                    </span>
                </div>

                <p className="text-lg font-bold text-gray-400 line-through">
                    $250.00
                </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4 lg:flex-row">
                <div className="flex items-center justify-between rounded-xl bg-gray-100 px-4 py-3 lg:w-40">
                    <button
                        type="button"
                        onClick={
                            handleDecrement
                        }
                        className="text-2xl cursor-pointer font-bold text-orange-500"
                    >
                        -
                    </button>

                    <input
                        type="number"
                        {...register(
                            'quantity',
                            {
                                valueAsNumber: true,
                            }
                        )}
                        readOnly
                        className="
                            quantity-input
                            w-12
                            bg-transparent
                            text-center
                            font-bold
                            outline-none
                        "
                    />

                    <button
                        type="button"
                        onClick={
                            handleIncrement
                        }
                        className="text-2xl cursor-pointer font-bold text-orange-500"
                    >
                        +
                    </button>
                </div>

                <button
                    type="submit"
                    className={`
                        flex flex-1 cursor-pointer items-center bg-orange-500 text-black hover:bg-orange-400 justify-center gap-3 rounded-xl py-4 font-bold shadow-lg transition-all
                    `}
                >
                    <ShoppingCart
                        size={20}
                    />
                    Add to cart
                </button>
            </div>
        </form>
    );
}

export default Calc;