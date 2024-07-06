import { Comfortaa } from "next/font/google";
import localFont from "next/font/local";

const logoFont = localFont({
  src: "fonts/ElfEmmaAndTheTinySpider.otf",
  display: "swap",
});

export const bodyFont = Comfortaa({
  subsets: ["latin"],
  display: "swap",
});

export default {
  logoFont,
  bodyFont,
};
