import { Calculator } from "./components/Calculator/Calculator";
import { Header } from "./components/Header/Header";
import { useTheme } from "./contexts/ThemeContext";

export function App() {
    const { theme } = useTheme();

    return (
        <div
            className={`${theme} min-h-screen px-4 py-8`}
        >
            <div className="mx-auto flex w-full max-w-md flex-col gap-8">
                <Header />

                <Calculator />
            </div>
        </div>
    );
}