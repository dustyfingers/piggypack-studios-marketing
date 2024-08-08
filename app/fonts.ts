import { Kalnia } from "next/font/google";
import localFont from "next/font/local";

const logoFont = localFont({
  src: "fonts/alleana-script.regular.otf",
  display: "swap",
  variable: "--font-logo",
});

const headerFont = localFont({
  src: "fonts/Babyground.ttf",
  display: "swap",
  variable: "--font-header",
});

export const bodyFont = Kalnia({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const fonts = {
  logoFont,
  headerFont,
  bodyFont,
};

export default fonts;
