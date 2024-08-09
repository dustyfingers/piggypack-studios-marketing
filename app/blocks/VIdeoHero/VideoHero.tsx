import style from "./component.module.css";
import ContentContainer from "@/app/components/ContentContainer";

const VideoHero = () => {
  return (
    <section className={style.videoHeroSection}>
      <ContentContainer>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={style.video}
          width="320"
          height="240"
          preload="none"
        >
          <source src={"/videos/landing-hero-test-vid.mp4"} type="video/mp4" />
        </video>
      </ContentContainer>
    </section>
  );
};

export default VideoHero;
