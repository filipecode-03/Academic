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
        <div className="grid grid-cols-4 gap-4 rounded-lg p-6">

            <Button onClick={() => inputNumber("7")}>
                7
            </Button>

            <Button onClick={() => inputNumber("8")}>
                8
            </Button>

            <Button onClick={() => inputNumber("9")}>
                9
            </Button>

            <Button onClick={deleteLast}>
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
                className="col-span-2"
            >
                RESET
            </Button>

            <Button
                onClick={equals}
                className="col-span-2"
            >
                =
            </Button>

        </div>
    );
}