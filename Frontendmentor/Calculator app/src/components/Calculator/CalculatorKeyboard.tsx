import { Button } from "../UI/Button";

interface CalculatorKeyboardProps {
    inputNumber: (number: string) => void;
    inputDecimal: () => void;
    chooseOperator: (operator: "+" | "-" | "x" | "/") => void;
    equals: () => void;
    deleteLast: () => void;
    reset: () => void;
}

export function CalculatorKeyboard({
    inputNumber,
    inputDecimal,
    chooseOperator,
    equals,
    deleteLast,
    reset,
}: CalculatorKeyboardProps) {
    return (
        <section
            className="
                grid
                grid-cols-4
                gap-3
                rounded-xl
                bg-keyboard
                p-4
                sm:gap-4
                sm:p-5
            "
        >
            <Button onClick={() => inputNumber("7")}>
                7
            </Button>

            <Button onClick={() => inputNumber("8")}>
                8
            </Button>

            <Button onClick={() => inputNumber("9")}>
                9
            </Button>

            <Button
                onClick={deleteLast}
                variant="danger"
                className="text-lg"
            >
                DEL
            </Button>

            <Button onClick={() => inputNumber("4")}>
                4
            </Button>

            <Button onClick={() => inputNumber("5")}>
                5
            </Button>

            <Button onClick={() => inputNumber("6")}>
                6
            </Button>

            <Button onClick={() => chooseOperator("+")}>
                +
            </Button>

            <Button onClick={() => inputNumber("1")}>
                1
            </Button>

            <Button onClick={() => inputNumber("2")}>
                2
            </Button>

            <Button onClick={() => inputNumber("3")}>
                3
            </Button>

            <Button onClick={() => chooseOperator("-")}>
                -
            </Button>

            <Button onClick={() => inputNumber("0")}>
                0
            </Button>

            <Button onClick={inputDecimal}>
                .
            </Button>

            <Button onClick={() => chooseOperator("/")}>
                /
            </Button>

            <Button onClick={() => chooseOperator("x")}>
                x
            </Button>

            <Button
                onClick={reset}
                variant="danger"
                className="col-span-2 text-lg"
            >
                RESET
            </Button>

            <Button
                onClick={equals}
                variant="accent"
                className="col-span-2"
            >
                =
            </Button>
        </section>
    );
}