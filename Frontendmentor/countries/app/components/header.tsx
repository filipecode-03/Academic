import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner page-container">
        <Link className="brand" href="/">
          Where in the world?
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
