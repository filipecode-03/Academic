import { Calculator } from "./components/Calculator/Calculator";
import { Header } from "./components/Header/Header";
import { useTheme } from "./contexts/ThemeContext";

export function App() {
    const { theme } = useTheme();

    return (
        <div
            className={`
                ${theme}
                min-h-screen
                bg-background
                text-primary
                transition-colors
                duration-300
            `}
        >
            <div
                className="
                    mx-auto
                    flex
                    min-h-screen
                    w-full
                    max-w-md
                    flex-col
                    px-5
                    py-8
                    sm:px-6
                "
            >
                <Header />

                <Calculator />
            </div>
        </div>
    );
}