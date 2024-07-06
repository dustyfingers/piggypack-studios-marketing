import styles from "./page.module.css";
import fonts from "./fonts";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* this is a weird solution */}
      <h1 className={`${styles.lead} ${fonts.logoFont.className}`}>
        PIGGYBACK STUDIOS
      </h1>
    </main>
  );
}
