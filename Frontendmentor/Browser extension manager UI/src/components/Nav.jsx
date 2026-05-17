import { Moon, Sun } from "lucide-react";

function Nav({ theme, toggleTheme }) {
  return (
    <header className="w-full px-6 py-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between bg-white dark:bg-neutral-800 px-6 py-4 rounded-2xl shadow-md">
        
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Extensions
        </h1>

        <button
          onClick={toggleTheme}
          className="
            p-3 rounded-xl
            bg-neutral-200 dark:bg-neutral-700
            hover:bg-neutral-300 dark:hover:bg-neutral-600
            transition-all duration-300
          "
        >
          {theme === "light" ? (
            <Moon size={20} />
          ) : (
            <Sun size={20} className="text-yellow-400" />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Nav;