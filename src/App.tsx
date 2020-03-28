import React, { useState } from "react";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleCreate = (value: string) => {
    setTodoList(
      todoList.concat([
        {
          id: Date.now().toString(),
          value,
          isComplete: false
        }
      ])
    );
  };

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoInput onCreate={handleCreate} />
        </header>
        {todoList.length ? (
          <>
            <section className="main">
              <input id="toggle-all" className="toggle-all" type="checkbox" />
              <label htmlFor="toggle-all">Mark all as complete</label>
              <ul className="todo-list">
                {todoList.map(todo => (
                  <TodoItem key={todo.id} todo={todo} />
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
