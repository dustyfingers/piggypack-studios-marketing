"use client";
import { motion, useScroll } from "framer-motion";
import style from "./component.module.css";

const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={style.scrollProgressIndicator}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressIndicator;
