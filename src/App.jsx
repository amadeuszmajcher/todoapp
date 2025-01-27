import { useReducer } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { Todoitem } from "./components/Todoitem/Todoitem";
import { getSubheading } from "./utils/getSubheading";
import { appReducer } from "./reducer/appReducer";
function App() {
  const [{ todos, isFormShown }, dispatch] = useReducer(appReducer, {
    todos: [
      { name: "Zapłacić rachunki", done: false, id: 1 },
      { name: "Wyrzucić śmieci", done: true, id: 2 },
    ],
    isFormShown: false,
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={() => dispatch({ type: "open_form" })}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form
          onFormSubmit={(newTodoName) => dispatch({ type: "add", newTodoName })}
        />
      )}
      <ul>
        {todos.map(({ id, name, done }) => (
          <Todoitem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => dispatch({ type: "delete", id })}
            onDoneButtonClick={() => dispatch({ type: "finish", id })}
          ></Todoitem>
        ))}
      </ul>
    </div>
  );
}

export default App;
