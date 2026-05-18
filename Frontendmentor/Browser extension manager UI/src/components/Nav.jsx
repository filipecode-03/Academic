import { Moon, Sun } from "lucide-react";
import logo from '../images/logo.svg'

function Nav({ theme, toggleTheme }) {
  return (
    <header className="w-full px-6 py-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between bg-white dark:bg-neutral-800 px-6 py-4 rounded-2xl shadow-md">
        <img src={logo} alt="logo" />
        <button onClick={toggleTheme}
          className="p-3 rounded-xl bg-[#EEEEEE] dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-all duration-300">
          {theme === "light" ? (
            <Moon size={20} />
          ) : (
            <Sun size={20} />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Nav;