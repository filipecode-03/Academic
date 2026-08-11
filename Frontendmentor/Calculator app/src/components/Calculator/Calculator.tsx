import { CalculatorDisplay } from "./CalculatorDisplay";
import { CalculatorKeyboard } from "./CalculatorKeyboard";
import { useCalculator } from "../../hooks/useCalculator";

export function Calculator() {
    const calculator = useCalculator();

    return (
        <main className="w-full max-w-md space-y-4">
            <CalculatorDisplay
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