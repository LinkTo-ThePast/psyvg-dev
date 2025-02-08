import type { Metadata } from "next";

//font
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Psyvig | Proyecto escolar",
  description: "Combinar videojuegos y psicología.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-welcomePage-secondary m-0 p-0 border-0`}
      >
        {children}
      </body>
    </html>
  );
}
