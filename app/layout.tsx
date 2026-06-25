import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Preloader } from "@/components/preloader";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aspekt Design — Студия дизайна интерфейсов",
  description:
    "Мы создаём интерфейсы, которые растут вместе с вами. Веб-сайты, мобильные приложения, CRM-системы.",
  icons: {
    icon: "/images/Logo2.png",
    shortcut: "/images/Logo2.png",
    apple: "/images/Logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ScrollToTop />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
