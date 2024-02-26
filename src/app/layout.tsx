import type { Metadata } from "next";
import { Inter, Barlow, Inconsolata, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const barlow = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});
const inconsolata = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inconsolata",
});
const lato = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Emmy Lim 2024",
  description: "Personal Site",
  keywords: "resume,homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${barlow.variable} ${inconsolata.variable} ${lato.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
