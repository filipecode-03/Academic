import plus from '../../public/images/icon-plus.svg'
import minus from '../../public/images/icon-minus.svg'

interface ScoreProps {
    score: number;
}

function Score({ score }: ScoreProps) {
    return (
        <div className="flex items-center gap-4 rounded-lg bg-[#F5F6FA] px-3 py-2 md:flex-col">

            <button
                type="button"
                aria-label="Increase score"
            >
                <img src={plus} alt="plus" />
            </button>

            <span className="font-bold text-[#5357B6]">
                {score}
            </span>

            <button
                type="button"
                aria-label="Decrease score"
            >
                <img src={minus} alt="minus" />
            </button>

        </div>
    );
}

export default Score;