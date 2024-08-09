"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import style from "./component.module.css";
import { useMobileNavMenuContext } from "@/app/context/MobileNavMenu";
import { usePathname } from "next/navigation";

const MobileNavMenu = () => {
  const [mobileNavMenu, setMobileNavMenu] = useMobileNavMenuContext();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined")
      window.addEventListener("resize", () => {
        window.innerWidth > 700 && setMobileNavMenu({ isOpen: false });
      });
  }, []);

  useEffect(() => {
    setMobileNavMenu({ isOpen: false });
  }, [pathname]);

  return (
    <div className={style.mobileNavMenuContainer}>
      <div className={style.fixedContainer}>
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
            <Link href="/projects" className={style.navItemLink}>
              Projects
            </Link>
          </li>
          <li className={style.navItem}>
            <Link href="/work-with-us" className={style.navItemLink}>
              Work With Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavMenu;
