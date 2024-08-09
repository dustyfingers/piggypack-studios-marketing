"use client";
import styles from "./page.module.css";
import LandingHero from "@/app/blocks/LandingHero";
import WhatWeDo from "@/app/blocks/WhatWeDo";
import MadeInColorado from "@/app/blocks/MadeInColorado/MadeInColorado";
import HorizontalScrollArea from "@/app/blocks/HorizontalScrollArea";

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
