import { useForm } from 'react-hook-form';
import { ShoppingCart } from 'lucide-react';

type FormData = {
    quantity: number;
};

function Calc() {
    const { register, handleSubmit, watch, setValue } = useForm<FormData>({
        defaultValues: { quantity: 1 },
    });

    const quantity = watch("quantity");

    const onSubmit = (data: FormData) => {
        console.log(data);
        // Implementar lógica para adicionar ao carrinho
    };

    const handleDecrement = () => {
        setValue("quantity", Math.max(1, quantity - 1));
    };

    const handleIncrement = () => {
        setValue("quantity", quantity + 1);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 md:w-full">
            <div className="flex items-center lg:flex-col lg:gap-2 lg:items-start justify-between mb-4">
                <div className="flex items-center gap-5">
                    <p className="font-bold text-4xl">$125.00</p>
                    <span className="bg-[#1B1F23] text-white font-bold py-1 px-2 rounded-[5px]">50%</span>
                </div>
                <p className="font-bold text-gray-500 text-[18px] line-through">$250.00</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2 md:w-1/3">
                    <button type="button" onClick={handleDecrement} className="text-orange-500 text-2xl font-bold px-2 py-1" aria-label="Decrease quantity">
                        -
                    </button>
                    <input
                        type="number"
                        {...register("quantity", { valueAsNumber: true, min: 1 })}
                        className="w-16 text-center bg-transparent font-bold text-lg outline-none"
                        aria-label="Product quantity"
                    />
                    <button type="button" onClick={handleIncrement} className="text-orange-500 text-2xl font-bold px-2 py-1" aria-label="Increase quantity">
                        +
                    </button>
                </div>
                <button
                    type="submit"
                    className="flex items-center justify-center gap-3 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 md:grow"
                    aria-label="Add to cart"
                >
                    <ShoppingCart className="h-5 w-5" /> Add to cart
                </button>
            </div>
        </form>
    );
}

export default Calc