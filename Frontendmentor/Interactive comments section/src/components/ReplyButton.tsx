interface ReplyButtonProps {
    onClick: () => void;
}

function ReplyButton({ onClick }: ReplyButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
                flex
                items-center
                gap-2
                font-bold
                text-[#5357B6]
                transition-opacity
                hover:opacity-70
            "
        >
            <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M1 6.5H13M1 6.5L6 1.5M1 6.5L6 11.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            Reply
        </button>
    );
}

export default ReplyButton;