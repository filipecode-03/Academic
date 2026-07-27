import { useForm } from "react-hook-form";
import { getExchangeRate } from "../services/exchange";
import type { CurrencyFormData } from "../types/currency";
import type { ConversionResult } from "../types/result";

type Props = {
    onConvert: (result: ConversionResult) => void;
};

function Form({ onConvert }: Props) {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<CurrencyFormData>();

    async function onSubmit(data: CurrencyFormData) {
        try {
            const rate = await getExchangeRate(data.currency);

            const converted = data.amount / rate;

            onConvert({
                amountBRL: data.amount,
                convertedAmount: converted,
                exchangeRate: rate,
                currency: data.currency,
            });
        } catch (error) {
            alert("Não foi possível obter a cotação.");
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-16 text-white"
        >
            <label>
                VALOR
            </label>
            <input
                type="number"
                step="0.01"
                placeholder="0,00"
                {...register("amount", {
                    required: true,
                    valueAsNumber: true,
                })}
                className="w-full bg-[#0E0F25] rounded-lg p-3"
            />

            <select
                {...register("currency", {
                    required: true,
                })}
                className="w-full rounded-lg p-3"
            >
                <option value="USD">Dólar americano</option>
                <option value="EUR">Euro</option>
                <option value="JPY">Iene japonês</option>
                <option value="ARS">Peso argentino</option>
                <option value="CNY">Yuan chinês</option>
            </select>

            <button
                disabled={isSubmitting}
                className="w-full rounded-lg bg-[#2F34AB] py-3 font-bold text-white"
            >
                {isSubmitting
                    ? "Convertendo..."
                    : "Converter em reais"}
            </button>
        </form>
    );
}

export default Form;