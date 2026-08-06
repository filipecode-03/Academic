import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Theme } from "../types/theme";
import { loadTheme, saveTheme } from "../utils/theme";

interface ThemeContextData {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<
  ThemeContextData | undefined
>(undefined);

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => loadTheme());

  function toggleTheme() {
    setTheme((previousTheme) =>
      previousTheme === "light" ? "dark" : "light"
    );
  }

  useEffect(() => {
  saveTheme(theme);

  document.documentElement.classList.toggle(
    "dark",
    theme === "dark"
  );
}, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}