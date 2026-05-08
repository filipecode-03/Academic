import { useForm } from "react-hook-form"

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="mt-10 p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
                                value: /^[0-9\s]+$/,
                                message: "Wrong format, numbers only",
                            },
                            minLength: {
                                value: 19,
                                message: "Card number is incomplete",
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
                <button type="submit" className="mt-2 p-4 rounded-[10px] text-[20px] bg-[#220930] text-white w-full hover:bg-[#2f0f42] active:scale-[0.98] transition-all">
                    Confirm
                </button>
            </form>
        </div>
    )
}

export default Form