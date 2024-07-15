"use client";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useScrollContext } from "@/app/context/Scroll";

gsap.registerPlugin(useGSAP);

interface IScrollContainer {
  children: React.ReactNode;
}

const ScrollContainer = ({ children }: IScrollContainer) => {
  const pathname = usePathname();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollContext, setScrollContext] = useScrollContext();

  useEffect(() => {
    if (scrollContainerRef.current) {
      setScrollContext({
        ...scrollContext,
        scrollContainer: scrollContainerRef.current,
      });
    }
  }, [scrollContainerRef.current]);
  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      location={pathname}
      containerRef={scrollContainerRef}
      // onLocationChange={(scroll: any) =>
      //   scroll.scrollTo(0, { duration: 0, disableLerp: true })
      // } // If you want to reset the scroll position to 0 for example
      onUpdate={() => console.log("Updated, but not on location change!")}
    >
      <div data-scroll-container ref={scrollContainerRef}>
        {children}
      </div>
    </LocomotiveScrollProvider>
  );
};

export default ScrollContainer;