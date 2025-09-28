import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filmes&Tal - Na verdade é só Filmes",
  description: "Um site para encontrar informações sobre os filmes - Mas foi criado com intuito de estudar NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
