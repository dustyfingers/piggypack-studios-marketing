import Link from "next/link";

import ContentContainer from "../ContentContainer/ContentContainer";
import style from "./component.module.css";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer className={style.footer}>
      <ContentContainer>
        <div className={style.footerContent}>
          <ul>
            <li className={style.listHeader}>Contact Us</li>
            <li className={style.footerListItem}>
              <a href={`tel:123-456-7890`}>123-456-7890</a>
            </li>
            <li className={style.footerListItem}>
              <a href={`tel:sales@piggybackstudios.co`}>
                sales@piggybackstudios.co
              </a>
            </li>
          </ul>
          <ul>
            <li className={style.listHeader}>Follow Us</li>
            <li className={style.footerListItem}>
              <a href={`https://www.linkedin.com`}>LinkedIn</a>
            </li>
            <li className={style.footerListItem}>
              <a href={`https://www.facebook.com`}>Facebook</a>
            </li>
            <li className={style.footerListItem}>
              <a href={`https://www.instagram.com`}>Instagram</a>
            </li>
          </ul>
          <ul>
            <li className={style.listHeader}>Links</li>
            <li className={style.footerListItem}>
              <Link href="/about-us">About Us</Link>
            </li>
            <li className={style.footerListItem}>
              <Link href="/our-work">Projects</Link>
            </li>
            <li className={style.footerListItem}>
              <Link href="/work-with-us">Work With Us</Link>
            </li>
          </ul>
          <div className={style.credits}>
            <p>&copy; Piggyback Studios, LLC {year}</p>
          </div>
        </div>
      </ContentContainer>
    </footer>
  );
};

export default Footer;
