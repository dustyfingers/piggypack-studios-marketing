import { Kalnia } from "next/font/google";
import localFont from "next/font/local";

const logoFont = localFont({
  src: "fonts/ElfEmmaAndTheTinySpider.otf",
  display: "swap",
  variable: "--font-logo",
});

export const bodyFont = Kalnia({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const fonts = {
  logoFont,
  bodyFont,
};

export default fonts;
