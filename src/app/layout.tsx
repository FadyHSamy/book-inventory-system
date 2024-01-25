"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import SideDrawer from "@/Layouts/SideMenu/sidemenu";

const fontStyle = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className={fontStyle.className} style={{ display: "flex" }}>
        <SideDrawer />
        <div style={{ flex: 1 }}>{children}</div>
      </body>
    </html>
  );
}
