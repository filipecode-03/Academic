import type { ConversionResult } from "../types/result";

type Props = {
    result: ConversionResult;
};

function Result({ result }: Props) {
    return (
        <section className="rounded-b-3xl bg-[#20214A] p-10 text-center text-white">
            <p className="text-[#7D8DEC] font-['IBM_Plex_Mono']">
                {result.currencyName} 1 ={" "}
                R$ {result.exchangeRate.toFixed(2)}
            </p>

            <h2 className="mt-2 text-[32px] font-bold">
                {result.convertedAmount.toFixed(2)} Reais
            </h2>
        </section>
    );
}

export default Result;