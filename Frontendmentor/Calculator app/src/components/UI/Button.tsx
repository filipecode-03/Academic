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
            className={`flex items-center justify-center rounded-lg p-4 text-2xl font-bold transition ${className}`}
        >
            {children}
        </button>
    );
}