import styles from "./page.module.css";
import LandingHero from "./blocks/LandingHero";

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingHero />
    </main>
  );
}
