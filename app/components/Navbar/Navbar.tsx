import ContentContainer from "../ContentContainer/ContentContainer";
import style from "./component.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ContentContainer>
        <Link href="/">
          <h6 className={style.logo}>PIGGYBACK</h6>
        </Link>
        <ul className={style.navMenu}>
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
      </ContentContainer>
    </nav>
  );
};

export default Navbar;
