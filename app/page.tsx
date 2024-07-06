import styles from "./page.module.css";
import fonts from "./fonts";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={fonts.logoFont.className}>PIGGYBACK STUDIOS</h1>
    </main>
  );
}
