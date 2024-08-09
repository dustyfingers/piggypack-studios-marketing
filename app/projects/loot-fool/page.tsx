import styles from "./page.module.css";
import PageHero from "../../blocks/PageHero";
import ThreeImageSection from "../../blocks/ThreeImageSection";
import VideoHero from "@/app/blocks/VIdeoHero/VideoHero";

export default function WorkWithUs() {
  return (
    <main className={styles.main} data-scroll-section>
      <PageHero
        headline={"LootFool"}
        subhead={
          "Complete branding, product design and E-Commerce site design and development."
        }
      />
      <VideoHero />
      <ThreeImageSection />
    </main>
  );
}
