"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import style from "./component.module.css";
import { useMobileNavMenuContext } from "@/app/context/MobileNavMenu";

const MobileNavMenu = () => {
  const [mobileNavMenu, setMobileNavMenu] = useMobileNavMenuContext();

  useEffect(() => {
    if (typeof window !== "undefined")
      window.addEventListener("resize", () => {
        window.innerWidth > 700 && setMobileNavMenu({ isOpen: false });
      });
  }, []);

  return (
    <div className={style.mobileNavMenuContainer}>
      <ul
        className={`${
          mobileNavMenu.isOpen ? style.mobileNavOpen : style.mobileNavClosed
        } ${style.mobileNavMenu}`}
      >
        <li className={style.navItem}>
          <Link href="/about-us" className={style.navItemLink}>
            About Us
          </Link>
        </li>
        <li className={style.navItem}>
          <Link href="/our-work">Our Work</Link>
        </li>
        <li className={style.navItem}>
          <Link href="/work-with-us">Work With Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavMenu;
