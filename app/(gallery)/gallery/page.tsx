import styles from "./page.module.css";
import InfiniteScrollGallery from "@/app/blocks/InfiniteScrollGallery";

export default function OurWork() {
  return (
    <main className={styles.main} data-scroll-section>
      <InfiniteScrollGallery />
    </main>
  );
}
