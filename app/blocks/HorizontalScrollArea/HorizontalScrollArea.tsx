"use client";

import ContentContainer from "@/app/components/ContentContainer";
import style from "./component.module.css";
import Image from "next/image";

enum ContentXOrientation {
  Left = "left",
  Right = "right",
}

enum ContentYOrientation {
  Top = "top",
  Bottom = "bottom",
}
interface IScrollAreaSection {
  content: string;
  imageSrc: string;
  contentX: ContentXOrientation;
  contentY: ContentYOrientation;
}

// represents one screen width worth of content
// should be able to have content to top bottom left or right of image
const ScrollAreaSection = ({
  content,
  imageSrc,
  contentX,
  contentY,
}: IScrollAreaSection) => {
  return (
    <div className={style.scrollAreaSection}>
      <div className={style.scrollSection}>
        <ContentContainer>
          <div className={style.imageContainer}>
            <Image
              src={imageSrc}
              alt={"a guy working"}
              width={512}
              height={512}
              className={style.image}
            />
            <p
              className={`${style.content} ${
                contentY === ContentYOrientation.Top ? style.contentTop : ""
              } ${
                contentX === ContentXOrientation.Left ? style.contentLeft : ""
              } ${
                contentY === ContentYOrientation.Bottom
                  ? style.contentBottom
                  : ""
              } ${
                contentX === ContentXOrientation.Right ? style.contentRight : ""
              }`}
            >
              {content}
            </p>
          </div>
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
            contentX={ContentXOrientation.Left}
            contentY={ContentYOrientation.Bottom}
          />
          <ScrollAreaSection
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageSrc="/images/stock-image.jpg"
            contentX={ContentXOrientation.Left}
            contentY={ContentYOrientation.Top}
          />
          <ScrollAreaSection
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageSrc="/images/stock-image.jpg"
            contentX={ContentXOrientation.Right}
            contentY={ContentYOrientation.Bottom}
          />
          <ScrollAreaSection
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageSrc="/images/stock-image.jpg"
            contentX={ContentXOrientation.Right}
            contentY={ContentYOrientation.Top}
          />
          <ScrollAreaSection
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageSrc="/images/stock-image.jpg"
            contentX={ContentXOrientation.Left}
            contentY={ContentYOrientation.Bottom}
          />
          <ScrollAreaSection
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageSrc="/images/stock-image.jpg"
            contentX={ContentXOrientation.Left}
            contentY={ContentYOrientation.Top}
          />
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollArea;
