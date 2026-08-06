import { ThemeSwitcher } from "../UI/ThemeSwitcher";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-4xl font-bold tracking-[0.5rem] text-white">
        TODO
      </h1>

      <ThemeSwitcher />
    </header>
  );
}