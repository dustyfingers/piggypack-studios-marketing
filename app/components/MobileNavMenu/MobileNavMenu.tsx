"use client";

import React, { useEffect, useState } from "react";
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
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
      </ul>
    </div>
  );
};

export default MobileNavMenu;
