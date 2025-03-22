import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ variable: "--font-nunito" })

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
      <body
        className={`${nunito.variable} antialiased`}
      >
        {/* Cabeçalho da página */}
        {children}
      </body>
    </html>
  );
}
