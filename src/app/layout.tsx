"use client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const backgroundColor = "#093545";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className} style={{ backgroundColor: backgroundColor }}>
          {children}
        </body>
      </html>
    </>
  );
}
