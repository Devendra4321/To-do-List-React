import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  let [todos, setTodos] = useState([
    { task: "Sample-task", id: uuidv4(), isDone: false },
  ]);

  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { task: newTodo, id: uuidv4(), isDone: false },
    ]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo((prevTodo) => event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
  };

  let completedAll = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  };

  let completedTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          placeholder="Add new task"
          value={newTodo}
          onChange={updateTodoValue}
        />
        <button onClick={addNewTask}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.isDone ? "completed" : ""}>
            <div className="li-container">
              <div>{todo.task}</div>
              <div>
                <i
                  onClick={() => deleteTodo(todo.id)}
                  className="fa-solid fa-trash"
                ></i>
                <i
                  className="fa-solid fa-square-check"
                  onClick={() => completedTodo(todo.id)}
                ></i>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={completedAll}>Completed All</button>
    </div>
  );
}

export default App;
