import { useState } from "react";
import type { Operator } from "../types/calculator";

export function useCalculator() {
    const [display, setDisplay] = useState("0");
    const [previousValue, setPreviousValue] = useState<number | null>(null);
    const [operator, setOperator] = useState<Operator | null>(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    function inputNumber(number: string) {
        if (waitingForOperand) {
            setDisplay(number);
            setWaitingForOperand(false);
            return;
        }

        setDisplay((current) => {
            if (current === "0") {
                return number;
            }

            return current + number;
        });
    }

    function inputDecimal() {
        if (waitingForOperand) {
            setDisplay("0.");
            setWaitingForOperand(false);
            return;
        }

        if (!display.includes(".")) {
            setDisplay((current) => current + ".");
        }
    }

    function calculate(
        firstValue: number,
        secondValue: number,
        currentOperator: Operator
    ) {
        switch (currentOperator) {
            case "+":
                return firstValue + secondValue;

            case "-":
                return firstValue - secondValue;

            case "x":
                return firstValue * secondValue;

            case "/":
                if (secondValue === 0) {
                    return null;
                }

                return firstValue / secondValue;
        }
    }

    function chooseOperator(nextOperator: Operator) {
        const inputValue = Number(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (operator) {
            const result = calculate(
                previousValue,
                inputValue,
                operator
            );

            if (result === null) {
                reset();
                setDisplay("Error");
                return;
            }

            setDisplay(String(result));
            setPreviousValue(result);
        }

        setOperator(nextOperator);
        setWaitingForOperand(true);
    }

    function equals() {
        if (previousValue === null || operator === null) {
            return;
        }

        const currentValue = Number(display);

        const result = calculate(
            previousValue,
            currentValue,
            operator
        );

        if (result === null) {
            reset();
            setDisplay("Error");
            return;
        }

        setDisplay(String(result));
        setPreviousValue(null);
        setOperator(null);
        setWaitingForOperand(true);
    }

    function deleteLast() {
        if (display === "Error") {
            reset();
            return;
        }

        setDisplay((current) => {
            if (current.length === 1) {
                return "0";
            }

            return current.slice(0, -1);
        });
    }

    function reset() {
        setDisplay("0");
        setPreviousValue(null);
        setOperator(null);
        setWaitingForOperand(false);
    }

    return {
        display,
        inputNumber,
        inputDecimal,
        chooseOperator,
        equals,
        deleteLast,
        reset,
    };
}