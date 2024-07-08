"use client";
import styles from "./component.module.css";
import fonts from "@/app/fonts";
import Typewriter from "typewriter-effect";

import LandingCTA from "@/app/components/LandingCTA";

const LandingHero = () => {
  return (
    <section className={styles.landingHero}>
      <div className={styles.landingGrid}>
        <div className={styles.textContainer}>
          <h1 className={`${styles.lead} ${fonts.logoFont.className}`}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("PIGGYBACK").start();
              }}
              options={{
                loop: false,
                cursor: "",
              }}
            />
          </h1>
          <h1 className={`${styles.lead} ${fonts.logoFont.className}`}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(1800).typeString("studios").start();
              }}
              options={{
                loop: false,
                cursor: "",
              }}
            />
          </h1>
        </div>

        <LandingCTA />
      </div>
    </section>
  );
};

export default LandingHero;
