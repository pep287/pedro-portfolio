import style from "./languages.module.css";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { SiC } from "react-icons/si";

export default function Languages() {
  return (
    <section className={style.Languages}>
      <h1 className={style.title}>Linguagens</h1>

      <ul className={style.listLanguages}>
        <li className={style.li}>
          <FaHtml5 className={style.icon} />
          HTML5
        </li>
        <li className={style.li}>
          <FaCss3Alt className={style.icon} />
          CSS
        </li>
        <li className={style.li}>
          <FaJsSquare className={style.icon} />
          JavaScript
        </li>
        <li className={style.li}>
          <FaReact className={style.icon} />
          React
        </li>
        <li className={style.li}>
          <SiC className={style.icon} />C
        </li>
        <li className={style.li}>
          <FaJava className={style.icon} />
          Java
        </li>
        <li className={style.li}>
          <FaPython className={style.icon} />
          Python
        </li>
      </ul>
    </section>
  );
}
