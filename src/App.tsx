import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

type TodoValue = string;
type Todo = {
  id: string;
  value: TodoValue;
  isComplete: boolean;
};

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [input, setInput] = useState<TodoValue>("");

  const handleKeyup = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key !== "Enter") {
      return;
    }

    const todo = input.trim();
    if (!todo) {
      return;
    }

    setTodoList(
      todoList.concat([
        {
          id: Date.now().toString(),
          value: todo,
          isComplete: false
        }
      ])
    );
    setInput("");
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setInput(value);
  };

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={input}
            onKeyUp={handleKeyup}
            onChange={handleChange}
          />
        </header>
        {todoList.length ? (
          <>
            <section className="main">
              <input id="toggle-all" className="toggle-all" type="checkbox" />
              <label htmlFor="toggle-all">Mark all as complete</label>
              <ul className="todo-list">
                {todoList.map(({ id, value, isComplete }) => (
                  <li key={id} className={isComplete ? "completed" : ""}>
                    <div className="view">
                      <input
                        className="toggle"
                        type="checkbox"
                        checked={isComplete}
                      />
                      <label>{value}</label>
                      <button className="destroy"></button>
                    </div>
                    <input className="edit" value={value} />
                  </li>
                ))}
              </ul>
            </section>
            <footer className="footer">
              <span className="todo-count">
                <strong>{todoList.length}</strong> item left
              </span>
              <ul className="filters">
                <li>
                  <a className="selected" href="#/">
                    All
                  </a>
                </li>
                <li>
                  <a href="#/active">Active</a>
                </li>
                <li>
                  <a href="#/completed">Completed</a>
                </li>
              </ul>
              <button className="clear-completed">Clear completed</button>
            </footer>
          </>
        ) : null}
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Created by <a href="https://github.com/helloheesu">Heesu Jung</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
};

export default App;
