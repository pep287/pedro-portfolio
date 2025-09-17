import styles from "./projects.module.css";

export default function Projects() {
  return (
    <section className={styles.cardsContainer}>
      <div className={styles.card}>
        <h2>Projetos</h2>
        <ul>
          <li>
            <strong>Portfolio Pessoal:</strong> Este site!
          </li>
          <li>
            <strong>
              <a
                href="https://github.com/noemisoares/your-pokedex"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Pokedex com team planner:
              </a>
            </strong>{" "}
            Projeto em Grupo usando React, para a cadeira de Programação Web e
            Mobile.
          </li>
          <li>
            <strong>
              <a
                href="https://github.com/MatheusOliveir4/magichess"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Magichess:
              </a>
            </strong>{" "}
            Trabalho em grupo realizado em Java para a cadeira de Programação
            Orientada a Objetos.
          </li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Acadêmico</h2>
        <ul>
          <li>
            <strong>Bacharelado em Ciência da Computação</strong> - Unicap (2024
            - presente)
          </li>
          <li>
            <strong>Curso de Python</strong> - Santander Academy (2025)
          </li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Soft Skills</h2>
        <ul>
          <li>Trabalho em equipe</li>
          <li>Proatividade</li>
          <li>Comunicação</li>
          <li>Adaptabilidade</li>
          <li>Resolução de Problemas</li>
        </ul>
      </div>
    </section>
  );
}
