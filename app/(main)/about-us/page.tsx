import styles from "./page.module.css";
import AboutUs from "@/app/blocks/AboutUs";
import PageHero from "@/app/blocks/PageHero";
import OurImpact from "@/app/blocks/OurImpact";
import WhatWeDo from "@/app/blocks/WhatWeDo";

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
