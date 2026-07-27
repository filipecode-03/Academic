const currencies = {
    USD: "USD-BRL",
    EUR: "EUR-BRL",
    JPY: "JPY-BRL",
    ARS: "ARS-BRL",
    CNY: "CNY-BRL",
};

export async function getExchangeRate(currency: keyof typeof currencies) {
    const pair = currencies[currency];

    const response = await fetch(
        `https://economia.awesomeapi.com.br/json/last/${pair}`
    );

    if (!response.ok) {
        throw new Error("Erro ao buscar cotação.");
    }

    const data = await response.json();

    const key = Object.keys(data)[0];

    return Number(data[key].bid);
}