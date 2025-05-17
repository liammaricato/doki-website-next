import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doki Live",
  description: "Site da Doki Live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/main_logo.png" type="image/png" />
      </head>
      <body
        className={`${nunito.variable} antialiased flex flex-col items-center bg-[url('/bg/PATTERN01.png')] bg-repeat`}
      >
        <main className="w-full max-w-[1920px]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
