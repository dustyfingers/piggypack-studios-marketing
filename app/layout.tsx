import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator";
import fonts from "./fonts";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Piggyback Studios",
  description: "Piggyback Studios marketing site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fonts.bodyFont.variable} ${fonts.logoFont.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollProgressIndicator />
        <Analytics />
      </body>
    </html>
  );
}
