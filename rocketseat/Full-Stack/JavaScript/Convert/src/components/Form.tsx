import { useForm } from "react-hook-form";
import { getExchangeRate } from "../services/exchange";
import type { CurrencyFormData } from "../types/currency";
import type { ConversionResult } from "../types/result";
import { ChevronDown } from "lucide-react";

type Props = {
    onConvert: (result: ConversionResult) => void;
};

function Form({ onConvert }: Props) {

    const currencyNames = {
    USD: "US$",
    EUR: "EUR€",
    JPY: "JPY¥",
    ARS: "ARS$",
    CNY: "CNH",
};

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<CurrencyFormData>();

    async function onSubmit(data: CurrencyFormData) {
    try {
        const rate = await getExchangeRate(data.currency);

        const converted = data.amount * rate;

        onConvert({
            amount: data.amount,
            convertedAmount: converted,
            exchangeRate: rate,
            currency: data.currency,
            currencyName: currencyNames[data.currency],
        });
    } catch {
        alert("Não foi possível obter a cotação.");
    }
}

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-16 py-14 text-white"
        >
            <fieldset className="flex flex-col gap-5">
                <label>
                    <p className="text-[#B2B8DE] font-['Inter'] text-[12px]">VALOR</p>
                    <input
                        type="number"
                        step="0.01"
                        placeholder="0,00"
                        {...register("amount", {
                            required: true,
                            valueAsNumber: true,
                        })}
                        className="w-full bg-[#0E0F25] mt-2 rounded-lg p-3"
                    />
                </label>
                <label>
                    <p className="text-[#B2B8DE] font-['Inter'] text-[12px]">MOEDA</p>
                    <div className="relative mt-2">
    <select
        {...register("currency", {
            required: true,
        })}
        className="w-full appearance-none rounded-lg bg-[#0E0F25] p-3 pr-10 text-white"
    >
        <option value="USD">Dólar americano</option>
        <option value="EUR">Euro</option>
        <option value="JPY">Iene japonês</option>
        <option value="ARS">Peso argentino</option>
        <option value="CNY">Yuan chinês</option>
    </select>

    <ChevronDown
        size={20}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    />
</div>
                </label>
            </fieldset>

            <button
                disabled={isSubmitting}
                className="w-full rounded-lg bg-[#2F34AB] font-['Inter'] py-3 mt-12 font-semibold text-white"
            >
                {isSubmitting
                    ? "Convertendo..."
                    : "Converter em reais"}
            </button>
        </form>
    );
}

export default Form;