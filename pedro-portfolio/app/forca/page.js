import Forca from "../../components/Forca";
import Link from "next/link";
import styles from "./page.module.css";

export default function ForcaPage() {
  return (
    <main>
      <Forca />
      <div className={styles.backButtonWrapper}>
        <Link href="/">
          <button className={styles.backButton}>Voltar ao Portfólio</button>
        </Link>
      </div>
    </main>
  );
}
