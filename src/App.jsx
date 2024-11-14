import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { Todoitem } from "./components/Todoitem/Todoitem";

function App() {
  const todos = [
    { name: "Zapłacić rachunki", done: false, id: 1 },
    { name: "Wyrzucić śmieci", done: true, id: 2 },
  ];

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
        {todos.map(({ id, name, done }) => (
          <Todoitem key={id} name={name} done={done}></Todoitem>
        ))}
      </ul>
    </div>
  );
}

export default App;
