"use client";
import styles from "./component.module.css";
import Typewriter from "typewriter-effect";

import LandingCTA from "@/app/components/LandingCTA";
import ContentContainer from "@/app/components/ContentContainer/ContentContainer";
import AnimatedBlob from "@/app/components/AnimatedBlob";

const LandingHero = () => {
  return (
    <section className={styles.landingHero} data-scroll-section>
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
      {/* <AnimatedBlob pathbank={1} size={100} top={1} left={1} delay={0.4} /> */}
      {/* <AnimatedBlob pathbank={2} size={200} top={1} right={1} delay={0.9} /> */}
      {/* <AnimatedBlob pathbank={3} size={500} bottom={1} left={1} delay={0} /> */}
    </section>
  );
};

export default LandingHero;
