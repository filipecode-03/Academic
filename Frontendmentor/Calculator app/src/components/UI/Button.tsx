import type { ReactNode } from "react";

type ButtonVariant =
    | "default"
    | "danger"
    | "accent";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    variant?: ButtonVariant;
    className?: string;
}

export function Button({
    children,
    onClick,
    variant = "default",
    className = "",
}: ButtonProps) {
    const variants = {
        default: "bg-key text-key-text",
        danger: "bg-danger text-danger-text",
        accent: "bg-accent text-accent-text",
    };

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
                shadow-[0_3px_0_rgba(0,0,0,0.25)]
                transition-all
                duration-100
                hover:brightness-110
                active:translate-y-[3px]
                active:shadow-none
                focus:outline-none
                focus:ring-2
                focus:ring-primary
                focus:ring-offset-2
                focus:ring-offset-background
                sm:h-16
                ${variants[variant]}
                ${className}
            `}
        >
            {children}
        </button>
    );
}