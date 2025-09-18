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
          Estudante do curso de Ciências da Computação na Universidade Católica
          de Pernambuco. Sou apaixonado por tecnologia, principalmente por
          desenvolvimento web. Tenho experiência em HTML, CSS, Javascript e
          React, além de conhecimentos em linguagens como C, Java e Python. Meu
          trunfo é a minha adaptabilidade e vontade de aprender coisas novas,
          além de ter boa proatividade e facilidade de trabalhar em equipe.
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
