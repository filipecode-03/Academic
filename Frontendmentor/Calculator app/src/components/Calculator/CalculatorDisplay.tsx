interface CalculatorDisplayProps {
    value: string;
}

export function CalculatorDisplay({
    value,
}: CalculatorDisplayProps) {
    return (
        <div className="flex h-24 items-center justify-end rounded-lg p-6">
            <span className="text-4xl font-bold">
                {value}
            </span>
        </div>
    );
}