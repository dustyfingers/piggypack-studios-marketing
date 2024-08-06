"use client";

import ContentContainer from "@/app/components/ContentContainer";
import style from "./component.module.css";
import Image from "next/image";

enum ContentOrientation {
  Top = "top",
  Left = "left",
  Bottom = "bottom",
  Right = "right",
}
interface IScrollAreaSection {
  content: string;
  imageSrc: string;
  contentOn: ContentOrientation;
}

// represents one screen width worth of content
// should be able to have content to top bottom left or right of image
const ScrollAreaSection = ({ content, imageSrc }: IScrollAreaSection) => {
  return (
    <div className={style.scrollAreaSection}>
      <div className={style.scrollSection}>
        <ContentContainer>
          <Image
            src={imageSrc}
            alt={"a guy working"}
            width={512}
            height={512}
            className={style.image}
          />
          <h6>{content}</h6>
        </ContentContainer>
      </div>
    </div>
  );
};

const HorizontalScrollArea = () => {
  return (
    <section className={style.horizontalScrollSection}>
      <div className={style.stickyArea}>
        <div className={style.scrollableArea}>
          <ScrollAreaSection
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageSrc="/images/stock-image.jpg"
            contentOn={ContentOrientation.Bottom}
          />
          <div className={style.scrollSection}>
            <ContentContainer>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h6>
            </ContentContainer>
          </div>
          <div className={style.scrollSection}>
            <ContentContainer>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h6>
            </ContentContainer>
          </div>
          <div className={style.scrollSection}>
            <ContentContainer>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h6>
            </ContentContainer>
          </div>
          <div className={style.scrollSection}>
            <ContentContainer>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h6>
            </ContentContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollArea;
