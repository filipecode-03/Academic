import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
    return (
        <header className="flex w-full max-w-md items-center justify-between">
            <h1 className="text-3xl font-bold">
                calc
            </h1>

            <ThemeSwitcher />
        </header>
    );
}