import ContentContainer from "../ContentContainer/ContentContainer";
import style from "./component.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <ContentContainer>
        <ul>
          <li>123-456-7890</li>
          <li>123-456-7890</li>
          <li>123-456-7890</li>
        </ul>
      </ContentContainer>
    </footer>
  );
};

export default Footer;
