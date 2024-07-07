import fonts from "@/app/fonts";
import style from "./component.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.navMenu}>
        <li className={style.navItem}>About Us</li>
        <li className={style.navItem}>Our Work</li>
      </ul>

      <Link href="/">
        <h4 className={`${fonts.logoFont.className} ${style.logo}`}>
          PIGGYBACK
        </h4>
      </Link>

      <ul className={style.navMenu}>
        <li className={style.navItem}>About Us</li>
        <li className={style.navItem}>Our Work</li>
      </ul>
    </nav>
  );
};

export default Navbar;
