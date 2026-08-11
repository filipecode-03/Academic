import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    className?: string;
}

export function Button({
    children,
    onClick,
    className = "",
}: ButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                flex
                h-14
                items-center
                justify-center
                rounded-lg
                px-3
                text-2xl
                font-bold
                transition-all
                duration-150
                hover:-translate-y-0.5
                active:translate-y-0
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                sm:h-16
                ${className}
            `}
        >
            {children}
        </button>
    );
}