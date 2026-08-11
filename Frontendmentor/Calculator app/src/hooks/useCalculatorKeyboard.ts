import { useEffect } from "react";

interface UseCalculatorKeyboardProps {
    inputNumber: (number: string) => void;
    inputDecimal: () => void;
    chooseOperator: (
        operator: "+" | "-" | "x" | "/"
    ) => void;
    equals: () => void;
    deleteLast: () => void;
    reset: () => void;
}

export function useCalculatorKeyboard({
    inputNumber,
    inputDecimal,
    chooseOperator,
    equals,
    deleteLast,
    reset,
}: UseCalculatorKeyboardProps) {
    useEffect(() => {
        function handleKeyboard(event: KeyboardEvent) {
            const { key } = event;

            if (/^[0-9]$/.test(key)) {
                inputNumber(key);
                return;
            }

            if (key === ".") {
                inputDecimal();
                return;
            }

            if (key === "+") {
                chooseOperator("+");
                return;
            }

            if (key === "-") {
                chooseOperator("-");
                return;
            }

            if (key === "*") {
                chooseOperator("x");
                return;
            }

            if (key === "/") {
                chooseOperator("/");
                return;
            }

            if (key === "Enter" || key === "=") {
                equals();
                return;
            }

            if (key === "Backspace") {
                deleteLast();
                return;
            }

            if (key === "Escape") {
                reset();
            }
        }

        window.addEventListener(
            "keydown",
            handleKeyboard
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyboard
            );
        };
    }, [
        inputNumber,
        inputDecimal,
        chooseOperator,
        equals,
        deleteLast,
        reset,
    ]);
}