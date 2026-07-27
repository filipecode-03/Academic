import { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import type { ConversionResult } from "../types/result";

function Main() {
    const [result, setResult] = useState<ConversionResult | null>(null);

    return (
        <main className="bg-[#141534] w-120 rounded-3xl mx-auto mt-12">
            <Form onConvert={setResult} />
            {result && (
                <Result result={result} />
            )}
        </main>
    );
}

export default Main;