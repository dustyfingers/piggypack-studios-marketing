"use client";
import styles from "./component.module.css";
import fonts from "@/app/fonts";
import Typewriter from "typewriter-effect";

import LandingCTA from "@/app/components/LandingCTA";

const LandingHero = () => {
  return (
    <section className={styles.landingHero}>
      <div className={styles.landingGrid}>
        <h1 className={`${styles.lead} ${fonts.logoFont.className}`}>
          <Typewriter
            options={{ strings: ["PIGGYBACK"], autoStart: true, loop: false }}
          />
        </h1>
        <h1 className={`${styles.lead} ${fonts.logoFont.className}`}>
          <Typewriter
            options={{
              strings: ["studios"],
              loop: false,
            }}
          />
        </h1>
        <LandingCTA />
      </div>
    </section>
  );
};

export default LandingHero;
