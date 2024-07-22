import ContentContainer from "@/app/components/ContentContainer/ContentContainer";
import style from "./component.module.css";
import Image from "next/image";

const GalleryItem = () => {
  return (
    <div className={style.galleryItemContainer}>
      <Image
        src="/images/stock-image.jpg"
        alt="a picture of a guy working"
        width={300}
        height={300}
        className={style.image}
      />
      <div className={style.galleryItemOverlay}>
        <div className={style.overlayContent}>
          <p>Project Name</p>
        </div>
      </div>
    </div>
  );
};

const WorkGallery = () => {
  return (
    <section className={style.workGallery}>
      <ContentContainer>
        <div className={style.gridContainer}>
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </div>
      </ContentContainer>
    </section>
  );
};

export default WorkGallery;
