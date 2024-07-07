"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Cloud from "../svg/Cloud";
import fonts from "@/app/fonts";

import styles from "./component.module.css";

const LandingCTA = () => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
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
    </motion.div>
  );
};

export default LandingCTA;
