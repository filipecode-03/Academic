import { useForm } from "react-hook-form"
import Painel from "./Pailnel"
import calculator from '../images/icon-calculator.svg'
import { useState } from "react"

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
    
    const [result, setResult] = useState(null)
    
    function onSubmit(data) {
        const P = Number(data.amount)
        const annualRate = Number(data.rate) / 100
        const r = annualRate / 12
        const n = Number(data.term) * 12

        let monthly = 0
        let total = 0

        if (data.type === "repayment") {
            const pow = Math.pow(1 + r, n)

            monthly = P * (r * pow) / (pow - 1)
            total = monthly * n
        } else {
            monthly = P * r
            total = monthly * n
        }

        setResult({ monthly, total })
    }
    

    return (
        <div className="bg-white lg:mt-15 lg:flex lg:max-w-6xl lg:mx-auto lg:rounded-3xl overflow-hidden">
            <section className="lg:w-1/2">
                <div className="px-7 pt-7 lg:flex lg:justify-between">
                    <h1 className="text-[#18303C] font-bold text-[25px]">
                        Mortgage Calculator
                    </h1>
                    <button
                        onClick={() => reset()}
                        className="underline cursor-pointer"
                        type="button"
                    >
                        Clear All
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex px-7 pb-7 flex-col mt-5 lg:mt-8 gap-5">
                    {/* Mortgage Amount */}
                    <div>
                        <label className="text-gray-600 font-medium">
                            Mortgage Amount
                        </label>
                        <div className={`group flex items-stretch mt-2 border rounded-md overflow-hidden transition ${ errors.amount ? "border-red-500" : "focus-within:border-[#D9D939]" }`}>
                            <span className={`px-5 font-semibold flex items-center transition ${ errors.amount ? "bg-red-500 text-white" : "bg-[#E3F4FE] text-[#4C626E] group-focus-within:bg-[#D9D939] group-focus-within:text-[#133040]" }`}>
                                £
                            </span>
                            <input
                                type="text"
                                inputMode="numeric"
                                className="w-full font-semibold p-2 outline-none"
                                {...register("amount", {
                                    required: "This field is required",
                                    setValueAs: (value) => value.replace(/,/g, "")
                                })}
                            />
                        </div>
                        {errors.amount && (
                            <p className="text-red-500 text-[14px] mt-2">
                                {errors.amount.message}
                            </p>
                        )}
                    </div>
                    <section className="flex flex-col lg:flex-row gap-5">
                        {/* Mortgage Term */}
                        <div>
                            <label className="text-gray-600 font-medium">
                                Mortgage Term
                            </label>
                            <div className={`group flex items-stretch mt-2 border rounded-md overflow-hidden transition ${ errors.term ? "border-red-500" : "focus-within:border-[#D9D939] focus-within:ring-1 focus-within:ring-[#D9D939]" }`}>
                                <input
                                    type="number"
                                    className="w-full font-semibold p-2 outline-none"
                                    {...register("term", { required: "This field is required" })}
                                />
                                <span
                                    className={`px-3 font-semibold flex items-center transition ${ errors.term ? "bg-red-500 text-white" : "bg-[#E3F4FE] text-[#4C626E] group-focus-within:bg-[#D9D939] group-focus-within:text-[#133040]" }`}>
                                    years
                                </span>
                            </div>
                            {errors.term && (
                                <p className="text-red-500 text-[14px] mt-2">
                                    {errors.term.message}
                                </p>
                            )}
                        </div>
                        {/* Interest Rate */}
                        <div>
                            <label className="text-gray-600 font-medium">
                                Interest Rate
                            </label>
                            <div className={`group flex items-stretch mt-2 border rounded-md overflow-hidden transition ${ errors.rate ? "border-red-500" : "focus-within:border-[#D9D939] focus-within:ring-1 focus-within:ring-[#D9D939]" }`}>
                                <input
                                    type="text"
                                    inputMode="decimal"
                                    className="w-full font-semibold p-2 outline-none"
                                    {...register("rate", {
                                        required: "This field is required",
                                        setValueAs: (value) =>
                                            value
                                                .replace(",", ".")
                                                .replace(/[^\d.]/g, "")
                                    })}/>
                                <span className={`px-3 font-semibold flex items-center transition ${ errors.rate ? "bg-red-500 text-white" : "bg-[#E3F4FE] text-[#4C626E] group-focus-within:bg-[#D9D939] group-focus-within:text-[#133040]" }`}>
                                    %
                                </span>
                            </div>
                            {errors.rate && (
                                <p className="text-red-500 text-[14px] mt-2">
                                    {errors.rate.message}
                                </p>
                            )}
                        </div>
                    </section>
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
                                    {...register("type", { required: "This field is required" })}
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
                            <p className="text-red-500 text-[14px] mt-2">{errors.type.message}</p>
                        )}
                    </div>
                    {/* Submit */}
                    <button
                        type="submit"
                        className="flex lg:mt-4 cursor-pointer items-center justify-center gap-2 bg-[#D9DB30] p-3 w-full lg:w-70 rounded-full font-semibold hover:brightness-95 focus:outline-2 focus:outline-offset-2"
                    >
                        <img src={calculator} alt="calculator" />
                        Calculate Repayments
                    </button>
                </form>
            </section>
            <Painel result={result} />
        </div>
    )
}

export default Form