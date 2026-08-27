interface ScoreProps {
    score: number;
}

function Score({ score }: ScoreProps) {
    return (
        <div className="flex flex-col items-center gap-2 rounded-lg bg-[#F5F6FA] px-3 py-2">
            <button
                type="button"
                className="font-bold text-[#C5C6EF] transition-colors hover:text-[#5357B6]"
            >
                +
            </button>

            <span className="font-bold text-[#5357B6]">
                {score}
            </span>

            <button
                type="button"
                className="font-bold text-[#C5C6EF] transition-colors hover:text-[#5357B6]"
            >
                -
            </button>
        </div>
    );
}

export default Score;