import Image from "next/image";
import style from "./component.module.css";
import ContentContainer from "@/app/components/ContentContainer";

const ThreeImageSection = () => {
  return (
    <section className={style.threeImageSection}>
      <ContentContainer>
        <div className={style.threeImageGrid}>
          <Image
            src="/images/stock-image.jpg"
            width="300"
            height="300"
            alt="a guy working"
            className={style.gridImage}
          />
          <Image
            src="/images/stock-image.jpg"
            width="300"
            height="300"
            alt="a guy working"
            className={style.gridImage}
          />

          <Image
            src="/images/stock-image.jpg"
            width="300"
            height="300"
            alt="a guy working"
            className={style.gridImage}
          />
        </div>
      </ContentContainer>
    </section>
  );
};

export default ThreeImageSection;
