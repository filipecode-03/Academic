import type { ConversionResult } from "../types/result";

type Props = {
    result: ConversionResult;
};

function Result({ result }: Props) {
    return (
        <section className="mt-10 rounded-xl bg-[#20214A] p-6 text-white">
            <h2 className="text-2xl font-bold">
                Resultado
            </h2>

            <p className="mt-5">
                Valor informado:
                <strong>
                    {" "}
                    R$ {result.amountBRL.toFixed(2)}
                </strong>
            </p>

            <p>
                Cotação:
                <strong>
                    {" "}
                    R$ {result.exchangeRate.toFixed(4)}
                </strong>
            </p>

            <p className="mt-4 text-3xl font-bold">
                {result.convertedAmount.toFixed(2)} {result.currency}
            </p>
        </section>
    );
}

export default Result;