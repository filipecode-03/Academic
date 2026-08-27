interface ScoreProps {
    score: number;
}

function Score({ score }: ScoreProps) {
    return (
        <div className="flex items-center gap-4 rounded-lg bg-[#F5F6FA] px-3 py-2 md:flex-col md:gap-2">

            <button
                type="button"
                aria-label="Increase score"
                className="group"
            >
                <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-colors group-hover:stroke-[#5357B6]"
                >
                    <path
                        d="M5.5 0V11M0 5.5H11"
                        stroke="#C5C6EF"
                        strokeWidth="2"
                    />
                </svg>
            </button>

            <span className="font-bold text-[#5357B6]">
                {score}
            </span>

            <button
                type="button"
                aria-label="Decrease score"
                className="transition-colors group-hover:stroke-[#5357B6]"
            >
                <svg
                    width="11"
                    height="3"
                    viewBox="0 0 11 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 1.5H11"
                        stroke="#C5C6EF"
                        strokeWidth="2"
                    />
                </svg>
            </button>

        </div>
    );
}

export default Score;