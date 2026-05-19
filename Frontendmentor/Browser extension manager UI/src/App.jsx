import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import ExtensionsList from "./components/ExtensionsList";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-neutral-100 p-6 dark:bg-neutral-900 transition-colors duration-300">
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <ExtensionsList />
    </div>
  );
}

export default App;