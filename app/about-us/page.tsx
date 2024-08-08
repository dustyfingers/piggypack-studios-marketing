import styles from "./page.module.css";
import AboutUs from "../blocks/AboutUs";
import PageHero from "../blocks/PageHero";
import OurImpact from "../blocks/OurImpact";
import WhatWeDo from "../blocks/WhatWeDo";

export default function AboutUsPage() {
  return (
    <main className={styles.main} data-scroll-section>
      <PageHero
        headline="About Us"
        subhead="Learn more about what makes Piggyback Studios tick"
      />
      <AboutUs />
      <OurImpact />
      <WhatWeDo />
    </main>
  );
}
