"use client";
import styles from "./page.module.css";
import LandingHero from "./blocks/LandingHero";
import WhatWeDo from "./blocks/WhatWeDo";
import MadeInColorado from "./blocks/MadeInColorado/MadeInColorado";
import HorizontalScrollArea from "./blocks/HorizontalScrollArea";
import { useScrollContext } from "./context/Scroll";
import Footer from "./components/Footer";

export default function Home() {
  const [scrollContext] = useScrollContext();
  return (
    <main
      className={styles.main}
      ref={scrollContext.scrollContainerRef}
      data-scroll-section
    >
      <LandingHero />
      <WhatWeDo />
      <HorizontalScrollArea />
      <MadeInColorado />
      <Footer />
    </main>
  );
}
