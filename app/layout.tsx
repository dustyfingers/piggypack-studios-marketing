import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator";
import Footer from "./components/Footer";
import fonts from "./fonts";
import ScrollContainer from "./components/ScrollContainer";
import { ScrollProvider } from "./context/Scroll";

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
        <ScrollProvider>
          <ScrollContainer>{children}</ScrollContainer>
        </ScrollProvider>
        <ScrollProgressIndicator />
      </body>
    </html>
  );
}
