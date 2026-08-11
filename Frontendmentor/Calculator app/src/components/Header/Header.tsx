import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
    return (
        <header className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">
                calc
            </h1>

            <ThemeSwitcher />
        </header>
    );
}