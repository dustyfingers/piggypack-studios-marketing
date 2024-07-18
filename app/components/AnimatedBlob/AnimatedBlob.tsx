"use client";
import { interpolate } from "flubber";
import React, { useState, useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

import bank1Paths from "./pathbank/bank1";
import bank2Paths from "./pathbank/bank2";
import bank3Paths from "./pathbank/bank3";
import bank4Paths from "./pathbank/bank4";

interface ICustomSvg {
  $size: number;
  $top?: number;
  $left?: number;
  $bottom?: number;
  $right?: number;
}

interface IAnimatedBlob {
  pathbank: number;
  size: number;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  delay: number;
}

const CustomSvg = styled.svg<ICustomSvg>`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  height: ${({ $size }) => `${$size}px`};
  ${({ $top }) => `top: ${$top}rem;`}
  ${({ $left }) => `left: ${$left}rem;`}
  ${({ $bottom }) => `bottom: ${$bottom}rem;`}
  ${({ $right }) => `right: ${$right}rem;`}
`;

// the performance of this is terrible and doesnt scale at all. needs to be fixed
const AnimatedBlob = ({
  pathbank,
  size,
  top,
  left,
  bottom,
  right,
  delay,
}: IAnimatedBlob) => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  let paths: string[];
  switch (pathbank) {
    case 1:
      paths = bank1Paths;
    case 2:
      paths = bank2Paths;
    case 3:
      paths = bank3Paths;
    case 4:
      paths = bank4Paths;
    default:
      paths = bank1Paths;
  }
  const arrayOfIndex = paths.map((_, i) => i);
  const path = useTransform(progress, arrayOfIndex, paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 }),
  });

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      type: "spring",
      delay,
      duration: 1.75,
      bounce: 0.55,
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          setPathIndex(0);
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
    <CustomSvg
      $size={size}
      $top={top}
      $left={left}
      $bottom={bottom}
      $right={right}
      viewBox={`0 0 200 200`}
    >
      <motion.path
        d={path}
        transform="translate(100 100)"
        fill="var(--cream)"
      />
    </CustomSvg>
  );
};

export default AnimatedBlob;
