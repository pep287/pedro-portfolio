import styles from "./socials.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Socials() {
  return (
    <div>
      <h2>Redes Sociais</h2>
      <ul className={styles.socials}>
        <li>
          <a
            href="https://github.com/pep287"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pedro-mota-mendes-011362328"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}
