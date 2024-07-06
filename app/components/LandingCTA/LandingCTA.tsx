import Link from "next/link";
import Cloud from "../svg/Cloud";

import styles from "./component.module.css";

const LandingCTA = () => {
  return (
    <Link href="/work-with-us">
      <Cloud style={styles.cloud} />
      work with us
    </Link>
  );
};

export default LandingCTA;
