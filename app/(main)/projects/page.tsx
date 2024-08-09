import styles from "./page.module.css";
import PageHero from "@/app/blocks/PageHero";
import WorkGallery from "@/app/blocks/WorkGallery";

export default function OurWork() {
  return (
    <main className={styles.main} data-scroll-section>
      <PageHero
        headline={"Our Work"}
        subhead="Take a look at our past projects with clients, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod."
      />
      <WorkGallery />
    </main>
  );
}
