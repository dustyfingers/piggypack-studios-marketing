"use client";
import styles from "./component.module.css";

import ContentContainer from "@/app/components/ContentContainer/ContentContainer";
import LandingTypeLogo from "@/app/components/svg/LandingTypeLogo";

const LandingHero = () => {
  return (
    <section className={styles.landingHero}>
      <video
        autoPlay
        loop
        muted
        className={styles.bgVideo}
        width="320"
        height="240"
        preload="none"
      >
        <source src={"/videos/landing-hero-test-vid.mp4"} type="video/mp4" />
      </video>
      <ContentContainer>
        <div className={styles.landingGrid}>
          <LandingTypeLogo />
          <p className={styles.contentContainer}>
            Piggyback Studios is a
            <strong> boutique design and development</strong> agency based in
            the beautiful city of Colorado Springs, Colorado.
          </p>
        </div>
      </ContentContainer>
    </section>
  );
};

export default LandingHero;
