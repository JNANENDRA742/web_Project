import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lilac Template",
  description: "Growth My Therapy Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} `}
      >
        {/* COMMON HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        {children}

        {/* COMMON FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
