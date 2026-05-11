import { useForm } from "react-hook-form"
import { useEffect } from "react"
import complete from '../images/icon-complete.svg'

function Form({ setCardData, isSubmitted, setIsSubmitted, initialCardData, }) {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const watchedValues = watch()

    useEffect(() => {
        setCardData(watchedValues)
        }, [watchedValues, setCardData])

        const onSubmit = () => {
        setIsSubmitted(true)

        // limpa os cards
        setCardData(initialCardData)

        // limpa os inputs
        reset()
    }

    return (
        <div className="mt-10 lg:mt-0 lg:mx-auto p-8">
            {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 lg:w-110">
                {/* Cardholder Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs tracking-[3px] font-semibold text-[#220930]">
                        CARDHOLDER NAME
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="e.g. Jane Appleseed"
                        className={`border rounded-lg px-4 py-3 outline-none transition-all
                        placeholder:text-gray-400
                        focus:border-[#610595]
                        ${
                            errors.name
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                        {...register("name", {
                            required: "Can't be blank",
                        })}
                    />
                    {errors.name && (
                        <span className="text-sm text-red-500">
                            {errors.name.message}
                        </span>
                    )}
                </div>
                {/* Card Number */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="cardNumber" className="text-xs tracking-[3px] font-semibold text-[#220930]">
                        CARD NUMBER
                    </label>
                    <input
                        id="cardNumber"
                        type="text"
                        placeholder="e.g. 1234 5678 9123 0000"
                        maxLength={19}
                        className={`border rounded-lg px-4 py-3 outline-none transition-all
                        placeholder:text-gray-400
                        focus:border-[#610595]
                        ${
                            errors.cardNumber
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                        {...register("cardNumber", {
                            required: "Can't be blank",
                            pattern: {
                                value: /^(\d{4}\s){3}\d{4}$/,
                                message: "Wrong format",
                            },
                            onChange: (e) => {
                                // Remove tudo que não for número
                                let value = e.target.value.replace(/\D/g, "")

                                // Limita em 16 números
                                value = value.substring(0, 16)

                                // Adiciona espaço a cada 4 números
                                value = value.replace(/(.{4})/g, "$1 ").trim()

                                e.target.value = value
                            },
                        })}
                    />

                    {errors.cardNumber && (
                        <span className="text-sm text-red-500">
                            {errors.cardNumber.message}
                        </span>
                    )}
                </div>
                {/* Exp Date + CVC */}
                <div className="flex gap-4">
                    {/* Exp Date */}
                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-xs tracking-[3px] font-semibold text-[#220930]">
                            EXP. DATE (MM/YY)
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="MM"
                                maxLength={2}
                                className={`w-full border rounded-lg px-4 py-3 outline-none transition-all
                                placeholder:text-gray-400
                                focus:border-[#610595]
                                ${
                                    errors.month
                                        ? "border-red-500"
                                        : "border-gray-300"
                                }`}
                                {...register("month", {
                                    required: "Can't be blank",
                                    pattern: {
                                        value: /^(0[1-9]|1[0-2])$/,
                                        message: "Invalid month",
                                    },
                                })}
                            />
                            <input
                                type="text"
                                placeholder="YY"
                                maxLength={2}
                                className={`w-full border rounded-lg px-4 py-3 outline-none transition-all
                                placeholder:text-gray-400
                                focus:border-[#610595]
                                ${
                                    errors.year
                                        ? "border-red-500"
                                        : "border-gray-300"
                                }`}
                                {...register("year", {
                                    required: "Can't be blank",
                                    pattern: {
                                        value: /^[0-9]{2}$/,
                                        message: "Invalid year",
                                    },
                                })}
                            />
                        </div>
                        {(errors.month || errors.year) && (
                            <span className="text-sm text-red-500">
                                {errors.month?.message ||
                                    errors.year?.message}
                            </span>
                        )}
                    </div>
                    {/* CVC */}
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="cvc" className="text-xs tracking-[3px] font-semibold text-[#220930]">
                            CVC
                        </label>
                        <input
                            id="cvc"
                            type="text"
                            placeholder="e.g. 123"
                            maxLength={3}
                            className={`border rounded-lg px-4 py-3 outline-none transition-all
                            placeholder:text-gray-400
                            focus:border-[#610595]
                            ${
                                errors.cvc
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            {...register("cvc", {
                                required: "Can't be blank",
                                pattern: {
                                    value: /^[0-9]{3}$/,
                                    message: "Invalid CVC",
                                },
                            })}
                        />
                        {errors.cvc && (
                            <span className="text-sm text-red-500">
                                {errors.cvc.message}
                            </span>
                        )}
                    </div>
                </div>
                {/* Button */}
                <button type="submit" className="cursor-pointer mt-2 p-4 rounded-[10px] text-[20px] bg-[#220930] text-white w-full hover:bg-[#2f0f42] active:scale-[0.98] transition-all">
                    Confirm
                </button>
            </form>
            ) : (
            <div className="mt-3">
                <div className="text-center">
                    <img src={complete} alt="complete" className="mx-auto" />
                    <h2 className="text-[30px] mt-6 tracking-[4px] font-semibold text-[#220930]">
                        THANK YOU!
                    </h2>
                    <p className="text-gray-400 mt-2 text-[20px]">
                        We've added your card details
                    </p>
                </div>
                <button
                    onClick={() => { setIsSubmitted(false) 
                        setCardData(initialCardData) } }
                    className="w-full mt-8 bg-[#220930] text-white p-4 rounded-xl cursor-pointer text-[20px] hover:bg-[#2f0f42] transition-all">
                    Continue
                </button>
            </div>
            )}
        </div>
    )
}

export default Form