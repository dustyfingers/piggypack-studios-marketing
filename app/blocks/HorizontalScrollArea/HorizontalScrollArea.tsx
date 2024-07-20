"use client";

import ContentContainer from "@/app/components/ContentContainer";
import style from "./component.module.css";

const HorizontalScrollArea = () => {
  return (
    <section className={style.horizontalScrollSection}>
      <div className={style.stickyArea}>
        <div className={style.scrollableArea}>
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
