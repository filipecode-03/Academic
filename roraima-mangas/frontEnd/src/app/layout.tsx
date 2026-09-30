import type { Metadata } from "next";
import { Roboto, Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/frontEnd/src/lib/utils";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Roraima Mangas",
  description: "Descrição do seu projeto",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "h-full",
        "antialiased",
        roboto.variable,
        nunito.variable
      )}
    >
      <body className="">{children}</body>
    </html>
  );
}