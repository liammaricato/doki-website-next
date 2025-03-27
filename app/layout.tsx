import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${nunito.variable} antialiased`}
      >
        <nav className="flex h-20 justify-between items-center px-20 py-4 bg-white">
            <img src="doki.png" alt="Logo Doki" className="h-full"/>
            <ul className="flex gap-8 text-black text-xl font-black">
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="#talentos">Talentos</a></li>
                <li><a href="/contato">Contato</a></li>
                <li><a href="/loja">Loja</a></li>
                <li><a href="/apoiar">Apoia-se</a></li>
            </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
