import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Socials from "../components/Socials";
import Languages from "../components/Languages";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.introSection}>
        <h1 className={styles.title}>Pedro Mota Mendes</h1>
        <div className={styles.avatarBox}>
          <Image
            src="/myimage.jpg"
            alt="Foto de perfil"
            width={180}
            height={180}
            className={styles.avatar}
          />
        </div>
        <p className={styles.description}>
          Estudante de Ciência da Computação na Universidade Católica de
          Pernambuco (UNICAP). Apaixonado por tecnologia, com experiência em
          desenvolvimento web e mobile usando JavaScript, React e React Native,
          além de sólidos conhecimentos em C, C++, C#, Java, Python e SQL.
          Familiarizado com metodologias Agile e trabalho em equipe, sempre
          buscando aprender e evoluir na área de software.
        </p>
      </section>

      <section className={styles.sectionsWrapper}>
        <div className={styles.socials}>
          <Socials />
        </div>
        <div className={styles.languages}>
          <Languages />
        </div>
        <div className={styles.projects}>
          <Projects />
        </div>
      </section>

      <div className={styles.forcaButtonWrapper}>
        <Link href="/forca" passHref>
          <button className={styles.forcaButton}>
            Ir para o Jogo da Forca
          </button>
        </Link>
      </div>
    </main>
  );
}
