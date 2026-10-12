import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Nortea Digital | Websites, e-commerces e sistemas sob medida",
    template: "%s | Nortea Digital",
  },
  description:
    "Soluções digitais que unem estratégia, design e tecnologia para simplificar processos e fazer negócios crescerem.",
  applicationName: "Nortea Digital",
  keywords: [
    "desenvolvimento web",
    "sites institucionais",
    "landing pages",
    "e-commerce",
    "sistemas web",
    "automações",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Nortea Digital",
    title: "Tecnologia que dá direção ao seu negócio.",
    description: "Websites, e-commerces e sistemas sob medida.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nortea Digital",
    description: "Tecnologia que dá direção ao seu negócio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#123D2E",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
