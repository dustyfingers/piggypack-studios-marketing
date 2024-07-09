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
      <div className={style.galleryItemOverlay}></div>
    </div>
  );
};

const WorkGallery = () => {
  return (
    <section className={style.workGallery}>
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
    </section>
  );
};

export default WorkGallery;
