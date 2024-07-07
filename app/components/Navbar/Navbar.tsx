import style from "./component.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.navMenu}>
        <li>About Us</li>
        <li>Our Work</li>
      </ul>

      <Link href="/">
        <h4>PIGGYBACK</h4>
      </Link>

      <ul className={style.navMenu}>
        <li>About Us</li>
        <li>Our Work</li>
      </ul>
    </nav>
  );
};

export default Navbar;
