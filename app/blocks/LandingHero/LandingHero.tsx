import styles from "./component.module.css";
import fonts from "@/app/fonts";

import LandingCTA from "@/app/components/LandingCTA";

const LandingHero = () => {
  return (
    <div className={styles.landingHero}>
      <h1 className={`${styles.lead} ${fonts.logoFont.className}`}>
        PIGGYBACK studios
      </h1>
      <LandingCTA />
    </div>
  );
};

export default LandingHero;
