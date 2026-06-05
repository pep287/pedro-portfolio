import style from "./languages.module.css";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { SiC, SiCplusplus, SiSharp, SiReactos } from "react-icons/si";

const languages = [
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <SiReactos />, label: "React Native" },
  { icon: <SiC />, label: "C" },
  { icon: <SiCplusplus />, label: "C++" },
  { icon: <SiSharp />, label: "C#" },
  { icon: <FaJava />, label: "Java" },
  { icon: <FaPython />, label: "Python" },
  { icon: <FaDatabase />, label: "SQL" },
];

export default function Languages() {
  return (
    <section className={style.Languages}>
      <h2 className={style.title}>Linguagens & Tecnologias</h2>
      <ul className={style.listLanguages}>
        {languages.map(({ icon, label }) => (
          <li key={label} className={style.li}>
            <span className={style.icon}>{icon}</span>
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
