import ContentContainer from "@/app/components/ContentContainer/ContentContainer";
import style from "./component.module.css";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className={style.aboutUs}>
      <div className={style.firstHalf}></div>
      <div className={style.secondHalf}></div>
      <ContentContainer>
        <h2 className={style.aboutUsHeader}>About Us</h2>
        <div className={style.contentGrid}>
          <div className={style.firstContent}>
            <Image
              src="/images/stock-image.jpg"
              alt="a guy working..."
              width={256}
              height={256}
            />
            <h4>Louie Williford</h4>
            <h6>Founding Partner, Technical Director</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex
              quas officia eum consectetur dolor maxime illum itaque totam
              consequuntur, asperiores earum, quidem iure atque provident
              perferendis! Asperiores, recusandae officiis.
            </p>
          </div>
          <div className={style.secondContent}>
            <Image
              src="/images/stock-image.jpg"
              alt="a guy working..."
              width={256}
              height={256}
            />
            <h4>Katy Williford</h4>
            <h6>Founding Partner, Creative Director</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex
              quas officia eum consectetur dolor maxime illum itaque totam
              consequuntur, asperiores earum, quidem iure atque provident
              perferendis! Asperiores, recusandae officiis.
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default AboutUs;
