"use client";
import { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import style from "./component.module.css";
import { useScrollContext } from "@/app/context/Scroll";

const HorizontalScrollArea = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollableAreaRef = useRef<HTMLDivElement>(null);
  const [scrollContext] = useScrollContext();

  const horizontalScrollAreaLength = useMemo(() => {
    if (scrollableAreaRef.current) return scrollableAreaRef.current.offsetWidth;
    else return 0;
  }, [scrollableAreaRef.current]);
  let horizontalScrollLength: number = 0;
  if (typeof window !== "undefined")
    horizontalScrollLength = horizontalScrollAreaLength - window.innerWidth;

  useGSAP(
    () => {
      if (scrollContext.scrollContainer) {
        gsap.to(style.scrollableArea, {
          scrollTrigger: {
            scroller: scrollContext.scrollContainer, //locomotive-scroll container
            scrub: true,
            trigger: style.horizontalScrollSection,
            pin: true,
            anticipatePin: 1,
            start: "top top",
            end: horizontalScrollAreaLength,
          },
          x: -horizontalScrollLength,
          ease: "none",
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      className={style.horizontalScrollSection}
      //  ref={sectionRef}
    >
      <div
        className={style.scrollableArea}
        // ref={scrollableAreaRef}
      >
        <div className={style.scrollSection}>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </div>
        <div className={style.scrollSection}>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </div>
        <div className={style.scrollSection}>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </div>
        <div className={style.scrollSection}>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </div>
        <div className={style.scrollSection}>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </div>
        <div className={style.scrollSection}>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollArea;
