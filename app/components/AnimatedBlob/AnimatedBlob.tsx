"use client";
import { interpolate } from "flubber";
import React, { useState, useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

import bank1Paths from "./pathbank/bank1";
import style from "./component.module.css";

interface IAnimatedBlob {
  pathbank: number;
}
const AnimatedBlob = ({ pathbank }: IAnimatedBlob) => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const paths = bank1Paths;
  const arrayOfIndex = paths.map((_, i) => i);
  const path = useTransform(progress, arrayOfIndex, paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 }),
  });

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      type: "spring",
      delay: 1,
      mass: 30,
      damping: 50,
      stiffness: 200,
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });
    return () => {
      animation.stop();
    };
  }, [pathIndex]);

  return (
    <svg viewBox="0 0 200 200" className={style.svg}>
      <motion.path
        d={path}
        transform="translate(100 100)"
        fill="var(--cream)"
      />
    </svg>
  );
};

export default AnimatedBlob;