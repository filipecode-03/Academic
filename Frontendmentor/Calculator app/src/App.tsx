import { Calculator } from "./components/Calculator/Calculator";
import { Header } from "./components/Header/Header";
import { useTheme } from "./contexts/ThemeContext";

export function App() {
    const { theme } = useTheme();

    return (
        <div className={`${theme} min-h-screen`}>
            <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8">

                <Header />

                <Calculator />

            </div>
        </div>
    );
}