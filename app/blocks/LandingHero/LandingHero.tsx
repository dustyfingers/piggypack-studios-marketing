import styles from "./component.module.css";
import fonts from "@/app/fonts";

import LandingCTA from "@/app/components/LandingCTA";

const LandingHero = () => {
  return (
    <section className={styles.landingHero}>
      <div className={styles.landingGrid}>
        <h1 className={`${styles.lead} ${fonts.logoFont.className}`}>
          PIGGYBACK studios
        </h1>
        <LandingCTA />
      </div>
    </section>
  );
};

export default LandingHero;
