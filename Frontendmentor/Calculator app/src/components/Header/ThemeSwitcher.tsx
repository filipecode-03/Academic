import { useTheme, type Theme } from "../../contexts/ThemeContext";

const themes: Theme[] = [
    "theme-1",
    "theme-2",
    "theme-3",
];

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest">
                THEME
            </span>

            <div className="flex gap-1.5">
                {themes.map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => setTheme(item)}
                        aria-label={`Selecionar ${item}`}
                        className={`
                            h-5 w-5 rounded-full
                            border-2
                            transition-all
                            duration-200
                            ${
                                theme === item
                                    ? "scale-110 border-current"
                                    : "border-transparent"
                            }
                        `}
                    />
                ))}
            </div>
        </div>
    );
}