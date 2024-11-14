import styles from "./App.module.css";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>5 zadań</h2>
        </div>
        <button className={styles.button}>+</button>
      </header>
      <Form></Form>
      <ul>
        <li>
          <span>Zapłacić rachunki</span>
          <button>Zrobione</button>
          <button>Usuń</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
