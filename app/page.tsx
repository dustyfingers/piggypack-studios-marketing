"use client";
import styles from "./page.module.css";
import LandingHero from "./blocks/LandingHero";
import WhatWeDo from "./blocks/WhatWeDo";
import MadeInColorado from "./blocks/MadeInColorado/MadeInColorado";
import HorizontalScrollArea from "./blocks/HorizontalScrollArea";

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingHero />
      <WhatWeDo />
      <HorizontalScrollArea />
      <MadeInColorado />
    </main>
  );
}
