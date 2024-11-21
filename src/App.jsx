import { useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { Todoitem } from "./components/Todoitem/Todoitem";
import { getSubheading } from "./utils/getSubheading";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [todos, setTodos] = useState([
    { name: "Zapłacić rachunki", done: false, id: 1 },
    { name: "Wyrzucić śmieci", done: true, id: 2 },
  ]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={() => setIsFormShown(true)}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form
          onFormSubmit={(newTodoName) => {
            setTodos((prevTodos) => [
              ...prevTodos,
              { name: newTodoName, done: false, id: prevTodos.length + 1 },
            ]);
            setIsFormShown(false);
          }}
        />
      )}
      <ul>
        {todos.map(({ id, name, done }) => (
          <Todoitem key={id} name={name} done={done}></Todoitem>
        ))}
      </ul>
    </div>
  );
}

export default App;
