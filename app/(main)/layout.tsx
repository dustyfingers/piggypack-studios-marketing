import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import fonts from "@/app/fonts";
import { MobileNavMenuProvider } from "@/app/context/MobileNavMenu";
import MobileNavMenu from "@/app/components/MobileNavMenu";
import ContentContainer from "@/app/components/ContentContainer";
import Footer from "@/app/components/Footer";
import ScrollProgressIndicator from "@/app/components/ScrollProgressIndicator";

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
      className={`${fonts.bodyFont.variable} ${fonts.logoFont.variable} ${fonts.headerFont.variable} antialiased`}
    >
      <body>
        <MobileNavMenuProvider>
          <Navbar />
          <ContentContainer>
            <MobileNavMenu />
          </ContentContainer>
        </MobileNavMenuProvider>
        {children}
        <Footer />
        <ScrollProgressIndicator />
        <Analytics />
      </body>
    </html>
  );
}
