"use client";
import styles from "./component.module.css";
import Typewriter from "typewriter-effect";

import LandingCTA from "@/app/components/LandingCTA";
import ContentContainer from "@/app/components/ContentContainer/ContentContainer";
import AnimatedBlob from "@/app/components/AnimatedBlob";

const LandingHero = () => {
  return (
    <section className={styles.landingHero}>
      <ContentContainer>
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
          <p className={styles.contentContainer}>
            Piggyback Studios is a
            <strong> boutique design and development</strong> agency based in
            the beautiful city of Colorado Springs, Colorado.
          </p>
          <LandingCTA />
        </div>
      </ContentContainer>
      <AnimatedBlob pathbank={1} />
    </section>
  );
};

export default LandingHero;
