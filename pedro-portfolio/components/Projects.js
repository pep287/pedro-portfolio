import styles from "./projects.module.css";

export default function Projects() {
  return (
    <section className={styles.wrapper}>
      {/* Projetos */}
      <div className={styles.card}>
        <h2>Projetos</h2>
        <ul>
          <li>
            <strong>Portfolio Pessoal:</strong> Este site! Desenvolvido com
            Next.js e React.
          </li>
          <li>
            <strong>
              <a
                href="https://github.com/noemisoares/your-pokedex"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Pokédex com Team Planner:
              </a>
            </strong>{" "}
            Projeto em grupo usando React e TypeScript, para a cadeira de
            Programação Web e Mobile.
          </li>
          <li>
            <strong>
              <a
                href="https://github.com/MatheusOliveir4/magichess"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                MagiChess:
              </a>
            </strong>{" "}
            Jogo de xadrez em Java desenvolvido em grupo para a cadeira de
            Programação Orientada a Objetos.
          </li>
          <li>
            <strong>Loja de Videogames (BD):</strong> Sistema de banco de dados
            relacional com SQL avançado, modelagem completa e consultas
            complexas. Projeto acadêmico em equipe.
          </li>
          <li>
            <strong>Simulação de Redes (Mininet):</strong> Configuração de
            roteamento estático, testes TCP/UDP e simulações de topologias para
            a cadeira de Redes de Computadores.
          </li>
        </ul>
      </div>

      {/* Acadêmico */}
      <div className={styles.card}>
        <h2>Acadêmico</h2>
        <ul>
          <li>
            <strong>Bacharelado em Ciência da Computação</strong>
            <br />
            UNICAP — 2024 a 2028 (em andamento)
          </li>
          <li>
            <strong>Curso de Python</strong>
            <br />
            Santander Academy — 2025
          </li>
          <li>
            <strong>Padrões de Projeto GoF & SOLID</strong>
            <br />
            Cadeira de Engenharia de Software — 2025
          </li>
          <li>
            <strong>Algoritmos de Ordenação</strong>
            <br />
            Análise de complexidade, TimSort, QuickSort — 2024/2025
          </li>
        </ul>

        <h2 className={styles.subheading}>Metodologias</h2>
        <ul>
          <li>
            <strong>Agile / Scrum / Kanban</strong> — experiência em entregas
            acadêmicas em equipe com sprints e retrospectivas.
          </li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className={styles.card}>
        <h2>Soft Skills</h2>
        <ul>
          <li>Trabalho em equipe</li>
          <li>Proatividade</li>
          <li>Comunicação</li>
          <li>Adaptabilidade</li>
          <li>Resolução de Problemas</li>
          <li>Organização</li>
        </ul>
      </div>
    </section>
  );
}
