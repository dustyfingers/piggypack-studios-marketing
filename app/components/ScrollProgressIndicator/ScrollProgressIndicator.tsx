"use client";
import { motion } from "framer-motion";
import style from "./component.module.css";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useEffect } from "react";

const ScrollProgressIndicator = () => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    console.log(scroll);
  }, [scroll]);

  return (
    <motion.div
      className={style.scrollProgressIndicator}
      style={{ scaleX: scroll }}
    />
  );
};

export default ScrollProgressIndicator;
