import { Moon, Sun } from "lucide-react";
import logo from '../images/logo.svg'
import logoDark from '../images/logo-dark.svg'
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'

function Nav({ theme, toggleTheme }) {
  return (
    <header className="w-full lg:max-w-280 lg:mx-auto">
      <nav className="mx-auto flex items-center justify-between bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-md">
        <img src={theme === "dark" ? logoDark : logo} alt="logo"/>        
        <button onClick={toggleTheme} className="p-3 rounded-xl cursor-pointer bg-[#EEEEEE] dark:bg-neutral-700 hover:bg-[#C6C6C4] dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#C6231D] focus:ring-offset-2 dark:focus:ring-offset-[#050A1E] transition-all duration-300">          
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