import { useTheme, type Theme } from "../../contexts/ThemeContext";

const themes: {
    id: Theme;
    className: string;
}[] = [
    {
        id: "theme-1",
        className: "bg-[#d03f2f]",
    },
    {
        id: "theme-2",
        className: "bg-[#ca5502]",
    },
    {
        id: "theme-3",
        className: "bg-[#00e0d1]",
    },
];

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-primary">
                THEME
            </span>

            <div className="flex gap-1.5">
                {themes.map(({ id, className }, index) => {
                    const isActive = theme === id;

                    return (
                        <button
                            key={id}
                            type="button"
                            onClick={() => setTheme(id)}
                            aria-label={`Selecionar tema ${index + 1}`}
                            aria-pressed={isActive}
                            className={`
                                ${className}
                                h-5
                                w-5
                                rounded-full
                                transition-all
                                duration-200
                                focus:outline-none
                                focus:ring-2
                                focus:ring-primary
                                focus:ring-offset-2
                                focus:ring-offset-background
                                ${
                                    isActive
                                        ? "scale-110 ring-2 ring-primary ring-offset-2"
                                        : "opacity-70 hover:scale-105 hover:opacity-100"
                                }
                            `}
                        />
                    );
                })}
            </div>
        </div>
    );
}