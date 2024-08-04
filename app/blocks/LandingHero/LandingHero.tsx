"use client";
import styles from "./component.module.css";

import ContentContainer from "@/app/components/ContentContainer/ContentContainer";
import LandingTypeLogo from "@/app/components/LandingTypeLogo";

const LandingHero = () => {
  return (
    <section className={styles.landingHero}>
      <ContentContainer>
        <div className={styles.landingGrid}>
          <div className={styles.leadContainer}>
            <LandingTypeLogo />
          </div>
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
