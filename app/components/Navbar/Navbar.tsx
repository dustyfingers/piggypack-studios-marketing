import ContentContainer from "../ContentContainer/ContentContainer";
import AnimatedHamburgerIcon from "../svg/AnimatedHamburgerIcon";
import style from "./component.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ContentContainer>
        <div className={style.flexContainer}>
          <Link href="/">
            <h3 className={style.logo}>Piggyback</h3>
          </Link>
          <ul className={style.navMenu}>
            <li className={style.navItem}>
              <Link href="/about-us">About Us</Link>
            </li>
            <li className={style.navItem}>
              <Link href="/our-work">Projects</Link>
            </li>
            <li className={style.navItem}>
              <Link href="/work-with-us">Work With Us</Link>
            </li>
          </ul>
          <AnimatedHamburgerIcon />
        </div>
      </ContentContainer>
    </nav>
  );
};

export default Navbar;
