import styles from "./page.module.css";
import PageHero from "../blocks/PageHero";
import WorkGallery from "../blocks/WorkGallery";

export default function OurWork() {
  return (
    <main className={styles.main}>
      <PageHero headline={"Our Work"} />
      <WorkGallery />
    </main>
  );
}
