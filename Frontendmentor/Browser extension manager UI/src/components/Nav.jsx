import { Moon, Sun } from "lucide-react";
import logo from '../images/logo.svg'
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'

function Nav({ theme, toggleTheme }) {
  return (
    <header className="w-full">
      <nav className="mx-auto flex items-center justify-between bg-white dark:bg-neutral-800 px-6 py-4 rounded-2xl shadow-md">
        <img src={logo} alt="logo" />
        <button onClick={toggleTheme}
          className="p-3 rounded-xl cursor-pointer bg-[#EEEEEE] dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-all duration-300">
          {theme === "light" ? (
            <img src={moon} alt="moon" />
          ) : (
            <img src={sun} alt="sun" />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Nav;