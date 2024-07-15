import styles from "./page.module.css";
import LandingHero from "../blocks/LandingHero";
import WhatWeDo from "../blocks/WhatWeDo";
import AboutUs from "../blocks/AboutUs";
import PageHero from "../blocks/PageHero";

export default function AboutUsPage() {
  return (
    <main className={styles.main} data-scroll-section>
      <PageHero
        headline="About Us"
        subhead="Learn more about what makes Piggyback Studios tick"
      />
      <AboutUs />
    </main>
  );
}
