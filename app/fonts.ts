import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

const logoFont = localFont({
  src: "fonts/ElfEmmaAndTheTinySpider.otf",
  display: "swap",
});

export const bodyFont = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default {
  logoFont,
  bodyFont,
};
