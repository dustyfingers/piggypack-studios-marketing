"use client";
import { useRef, useEffect, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import style from "./component.module.css";
import { useScrollContext } from "@/app/context/Scroll";

const HorizontalScrollArea = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const [scrollContext] = useScrollContext();

  const pinWrapWidth = useMemo(() => {
    if (pinWrapRef.current) return pinWrapRef.current.offsetWidth;
    else return 0;
  }, [pinWrapRef.current]);
  const horizontalScrollLength = pinWrapWidth - window.innerWidth;

  useEffect(() => {}, []);

  useGSAP(
    () => {
      if (scrollContext.scrollContainer) {
        gsap.to(".pinWrap", {
          scrollTrigger: {
            scroller: scrollContext.scrollContainer, //locomotive-scroll container
            scrub: true,
            trigger: "#sectionPin",
            pin: true,
            // anticipatePin: 1,
            start: "top top",
            end: pinWrapWidth,
          },
          x: -horizontalScrollLength,
          ease: "none",
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section className={style.sectionPin} ref={sectionRef}>
      <div className={style.pinWrap} ref={pinWrapRef}>
        <div className={style.scrollSection}>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </div>
        <div className={style.scrollSection}>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </div>
        <div className={style.scrollSection}>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollArea;
