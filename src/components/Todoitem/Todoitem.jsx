import { Button } from "../Button/Button";
import styles from "./Todoitem.module.css";

export function Todoitem({ name, done }) {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{name}</span>
      {!done && <Button>Zrobione</Button>}
      <Button>Usuń</Button>
    </li>
  );
}
