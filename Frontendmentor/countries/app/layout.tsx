import type { Metadata } from "next";
import { Header } from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "Explore countries and discover essential facts from around the world.",
};

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("countries-theme");
    const theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
