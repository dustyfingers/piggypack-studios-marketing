"use client";
import styles from "./component.module.css";
import Typewriter from "typewriter-effect";

import LandingCTA from "@/app/components/LandingCTA";

const LandingHero = () => {
  return (
    <section className={styles.landingHero}>
      <div className={styles.landingGrid}>
        <div className={styles.leadContainer}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("PIGGYBACK").start();
            }}
            options={{
              loop: false,
              cursor: "",
              wrapperClassName: "leadWrapper",
            }}
            component={"h1"}
          />
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(1800).typeString("studios").start();
            }}
            options={{
              loop: false,
              cursor: "",
              wrapperClassName: "leadWrapper",
            }}
            component={"h1"}
          />
        </div>
        <p>
          Piggyback Studios is a boutique design and development agency located
          in the beautiful city of Colorado Springs, Colorado.
        </p>
        <LandingCTA />
      </div>
    </section>
  );
};

export default LandingHero;
