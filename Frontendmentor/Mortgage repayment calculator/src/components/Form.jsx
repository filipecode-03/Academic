import { useForm } from "react-hook-form"
import Painel from "./Pailnel"
import calculator from '../images/icon-calculator.svg'

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <div className="p-7 bg-white">
            <div>
                <h1 className="text-[#18303C] font-bold text-[25px]">
                    Mortgage Calculator
                </h1>
                <button 
                    onClick={() => reset()}
                    className="underline"
                    type="button"
                >
                    Clear All
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-5 gap-5">
                {/* Mortgage Amount */}
                <div>
                    <label className="text-gray-600 font-medium">
                        Mortgage Amount
                    </label>
                    <div className="flex items-stretch mt-2 border rounded-md overflow-hidden">
                        <span className="bg-[#E3F4FE] text-[#4C626E] px-5 font-semibold flex items-center">
                            £
                        </span>
                        <input
                            type="number"
                            className="w-full font-semibold p-2 outline-none"
                            {...register("amount", { required: "This field is required" })}
                        />
                    </div>
                    {errors.amount && (
                        <p className="text-red-500">{errors.amount.message}</p>
                    )}
                </div>
                {/* Mortgage Term */}
                <div>
                    <label className="text-gray-600 font-medium">
                        Mortgage Term
                    </label>
                    <div className="flex items-stretch mt-2 border rounded-md overflow-hidden">
                        <input
                            type="number"
                            className="w-full font-semibold p-2 outline-none"
                            {...register("term", { required: "This field is required" })}
                        />
                        <span className="px-3 bg-[#E3F4FE] text-[#4C626E] font-semibold flex items-center">
                            years
                        </span>
                    </div>
                    {errors.term && (
                        <p className="text-red-500">{errors.term.message}</p>
                    )}
                </div>
                {/* Interest Rate */}
                <div>
                    <label className="text-gray-600 font-medium">
                        Interest Rate
                    </label>
                    <div className="flex items-stretch mt-2 border rounded-md overflow-hidden">
                        <input
                            type="number"
                            className="w-full font-semibold p-2 outline-none"
                            {...register("rate", { required: "This field is required" })}
                        />

                        <span className="px-3 bg-[#E3F4FE] text-[#4C626E] font-semibold flex items-center">
                            %
                        </span>
                    </div>
                    {errors.rate && (
                        <p className="text-red-500">{errors.rate.message}</p>
                    )}
                </div>
                {/* Mortgage Type */}
                <div>
                    <label className="text-gray-600 block mb-2">
                        Mortgage Type
                    </label>
                    <div className="flex flex-col gap-2">
                        {/* Repayment */}
                        <label className="cursor-pointer">
                            <input
                                type="radio"
                                value="repayment"
                                className="hidden peer"
                                {...register("type", { required: "Select a type" })}
                            />

                            <div className="flex items-center gap-2 border p-3 rounded 
                                            peer-checked:bg-[#caca2b42] 
                                            peer-checked:border-[#A4A76F] 
                                            transition">

                                {/* bolinha */}
                                <div className="radio-circle">
                                    <div className="radio-dot"></div>
                                </div>

                                <span className="font-semibold">
                                    Repayment
                                </span>
                            </div>
                        </label>
                        {/* Interest Only */}
                        <label className="cursor-pointer">
                            <input
                                type="radio"
                                value="interest-only"
                                className="hidden peer"
                                {...register("type", { required: "Select a type" })}
                            />

                            <div className="flex items-center gap-2 border p-3 rounded 
                                            peer-checked:bg-[#caca2b42] 
                                            peer-checked:border-[#A4A76F] 
                                            transition">

                                {/* bolinha (AGORA PADRÃO) */}
                                <div className="radio-circle">
                                    <div className="radio-dot"></div>
                                </div>

                                <span className="font-semibold">
                                    Interest Only
                                </span>
                            </div>
                        </label>
                    </div>
                    {errors.type && (
                        <p className="text-red-500 text-sm">{errors.type.message}</p>
                    )}
                </div>
                {/* Submit */}
                <button 
                    type="submit"
                    className="flex cursor-pointer items-center justify-center gap-2 bg-[#D9DB30] p-3 w-full rounded-full font-semibold hover:brightness-95 focus:outline-2 focus:outline-offset-2"
                >
                    <img src={calculator} alt="calculator" />
                    Calculate Repayments
                </button>
            </form>
            <Painel />
        </div>
    )
}

export default Form