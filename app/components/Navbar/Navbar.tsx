import ContentContainer from "../ContentContainer/ContentContainer";
import MobileNavMenu from "../MobileNavMenu";
import AnimatedHamburgerIcon from "../svg/AnimatedHamburgerIcon";
import style from "./component.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ContentContainer>
        <div className={style.flexContainer}>
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
          <AnimatedHamburgerIcon />
        </div>
        <MobileNavMenu />
      </ContentContainer>
    </nav>
  );
};

export default Navbar;
