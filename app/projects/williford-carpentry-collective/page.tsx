import styles from "./page.module.css";
import PageHero from "../../blocks/PageHero";
import ThreeImageSection from "../../blocks/ThreeImageSection";

export default function WorkWithUs() {
  return (
    <main className={styles.main} data-scroll-section>
      <PageHero
        headline={"Williford Carpentry Collective"}
        subhead={
          "Let us know as much as you can about your project, and we will get back to you within 48 hours."
        }
      />
      <ThreeImageSection />
    </main>
  );
}
