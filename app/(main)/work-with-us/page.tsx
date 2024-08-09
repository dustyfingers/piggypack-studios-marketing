import styles from "./page.module.css";
import PageHero from "@/app/blocks/PageHero";
import ContactForm from "@/app/blocks/ContactForm";
import ThreeImageSection from "@/app/blocks/ThreeImageSection";

export default function WorkWithUs() {
  return (
    <main className={styles.main} data-scroll-section>
      <PageHero
        headline={"Work With Us"}
        subhead={
          "Let us know as much as you can about your project, and we will get back to you within 48 hours."
        }
      />
      <ContactForm />
      <ThreeImageSection />
    </main>
  );
}
