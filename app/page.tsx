import styles from "./page.module.css";
import fonts from "./fonts";
import LandingCTA from "./components/LandingCTA";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <h1 className={`${styles.lead} ${fonts.logoFont.className}`}>
          PIGGYBACK studios
        </h1>
        <LandingCTA />
      </div>
    </main>
  );
}
