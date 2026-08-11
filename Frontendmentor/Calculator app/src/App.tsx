import { Header } from "./components/Header/Header";
import { Calculator } from "./components/Calculator/Calculator";

export function App() {
    return (
        <div className="flex min-h-screen justify-center px-4 py-8">
            <div className="flex w-full max-w-md flex-col gap-8">
                <Header />
                <Calculator />
            </div>
        </div>
    );
}