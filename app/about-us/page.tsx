import styles from "./page.module.css";
import LandingHero from "../blocks/LandingHero";
import WhatWeDo from "../blocks/WhatWeDo";
import AboutUs from "../blocks/AboutUs";

export default function AboutUsPage() {
  return (
    <main className={styles.main}>
      <AboutUs />
    </main>
  );
}
