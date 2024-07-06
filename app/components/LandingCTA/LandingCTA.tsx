import Link from "next/link";
import Cloud from "../svg/Cloud";
import fonts from "@/app/fonts";

import styles from "./component.module.css";

const LandingCTA = () => {
  return (
    <Link href="/work-with-us" className={styles.link}>
      <Cloud
        containerClassName={styles.cloudContainer}
        className={styles.cloud}
      >
        <span className={`${styles.linkText} ${fonts.logoFont.className}`}>
          work with us
        </span>
      </Cloud>
    </Link>
  );
};

export default LandingCTA;
