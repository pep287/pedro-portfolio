import Image from "next/image";
import styles from "./page.module.css";
import Socials from "../components/Socials";
import Languages from "../components/Languages";
import Projects from "../components/Projects";
export default function Home() {
  return (
    <main className={styles.container}>
      <Image
        src="/myimage.jpg"
        alt="Foto de perfil"
        width={200}
        height={200}
        className={styles.avatar}
      />
      <h1 className={styles.title}>Pedro Mota Mendes</h1>
      <p className={styles.description}>
        Estudante do curso de Ciencias da Computação na Universidade Catolica de
        Pernambuco. Sou apaixonado por tecnologia, e principalmente por
        desenvolvimento web. Tenho experiencia em HTML, CSS, Javascript e React,
        além de conhecimentos em linguagens como C, Java e Python. Meu trunfo é
        a minha adaptabilidade e vontade de aprender coisas novas, além de ter
        boa proatividade e facilidade de trabalhar em equipe.
      </p>
      <div className={styles.socials}>
        <Socials />
      </div>
      <div className={styles.Languages}>
        <Languages />
      </div>
      <div className={styles.Projects}>
        <Projects />
      </div>
    </main>
  );
}
