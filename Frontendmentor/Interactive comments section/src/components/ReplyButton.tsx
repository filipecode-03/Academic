import replyImg from '../../public/images/icon-reply.svg'

interface ReplyButtonProps {
    onClick: () => void;
    className?: string;
}

function ReplyButton({
    onClick,
    className = "",
}: ReplyButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                flex
                items-center
                gap-2
                font-bold
                text-[#5357B6]
                transition-opacity
                hover:opacity-70
                ${className}
            `}
        >
            <img src={replyImg} alt="" />

            Reply
        </button>
    );
}

export default ReplyButton;