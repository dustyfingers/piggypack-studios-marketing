import styles from "./page.module.css";
import LandingHero from "../blocks/LandingHero";
import WhatWeDo from "../blocks/WhatWeDo";

export default function AboutUs() {
  return (
    <main className={styles.main}>
      <LandingHero />
      <WhatWeDo />
    </main>
  );
}
