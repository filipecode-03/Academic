import { CalculatorDisplay } from "./CalculatorDisplay";
import { CalculatorKeyboard } from "./CalculatorKeyboard";

import { useCalculator } from "../../hooks/useCalculator";
import { useCalculatorKeyboard } from "../../hooks/useCalculatorKeyboard";

export function Calculator() {
    const calculator = useCalculator();

    useCalculatorKeyboard({
        inputNumber: calculator.inputNumber,
        inputDecimal: calculator.inputDecimal,
        chooseOperator: calculator.chooseOperator,
        equals: calculator.equals,
        deleteLast: calculator.deleteLast,
        reset: calculator.reset,
    });

    return (
        <main className="flex flex-col gap-6">
            <CalculatorDisplay
                expression={calculator.expression}
                value={calculator.display}
            />

            <CalculatorKeyboard
                inputNumber={calculator.inputNumber}
                inputDecimal={calculator.inputDecimal}
                chooseOperator={calculator.chooseOperator}
                equals={calculator.equals}
                deleteLast={calculator.deleteLast}
                reset={calculator.reset}
            />
        </main>
    );
}