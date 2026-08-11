interface CalculatorDisplayProps {
    expression: string;
    value: string;
}

export function CalculatorDisplay({
    expression,
    value,
}: CalculatorDisplayProps) {
    return (
        <section
            className="
                flex
                min-h-32
                flex-col
                items-end
                justify-center
                rounded-xl
                bg-display
                px-6
                py-5
            "
        >
            <span
                className="
                    min-h-6
                    max-w-full
                    overflow-hidden
                    text-right
                    text-sm
                    font-medium
                    text-secondary
                "
            >
                {expression}
            </span>

            <span
                className="
                    w-full
                    overflow-hidden
                    text-right
                    text-4xl
                    font-bold
                    tracking-tight
                    text-primary
                    sm:text-5xl
                "
            >
                {value}
            </span>
        </section>
    );
}