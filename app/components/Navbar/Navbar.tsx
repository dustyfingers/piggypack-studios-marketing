import style from "./component.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link href="/">
        <h3 className={style.logo}>PIGGYBACK</h3>
      </Link>

      <ul className={style.navMenu}>
        <li className={style.navItem}>About Us</li>
        <li className={style.navItem}>Our Work</li>
      </ul>
    </nav>
  );
};

export default Navbar;
