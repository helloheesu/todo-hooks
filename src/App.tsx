import React, { useState } from "react";
import { HashRouter as Router, NavLink } from "react-router-dom";

import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import ToggleAllComplete from "./ToggleAll";

import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

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

  const handleRemove = (id: Id) => {
    const index = todoList.findIndex(todo => todo.id === id);
    if (index < 0) {
      return;
    }

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);

    setTodoList(newTodoList);
  };

  const handleToggleComplete = (id: Id, isComplete: boolean) => {
    const index = todoList.findIndex(todo => todo.id === id);
    if (index < 0) {
      return;
    }

    const oldTodo = todoList[index];

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1, {
      ...oldTodo,
      isComplete
    });

    setTodoList(newTodoList);
  };

  const handleToggleAllComplete = (isComplete: boolean) => {
    const newTodoList = todoList.map(todo => ({
      ...todo,
      isComplete
    }));

    setTodoList(newTodoList);
  };

  return (
    <Router>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoInput onCreate={handleCreate} />
        </header>
        {todoList.length ? (
          <>
            <section className="main">
              <ToggleAllComplete
                isCompleteList={todoList.map(({ isComplete }) => isComplete)}
                onToggleAllComplete={handleToggleAllComplete}
              />
              <ul className="todo-list">
                {todoList.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onRemove={handleRemove}
                    onToggleComplete={handleToggleComplete}
                  />
                ))}
              </ul>
            </section>
            <footer className="footer">
              <span className="todo-count">
                <strong>
                  {todoList.filter(({ isComplete }) => !isComplete).length}
                </strong>{" "}
                item left
              </span>
              <ul className="filters">
                <li>
                  <NavLink exact to="/" activeClassName="selected">
                    All
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/active" activeClassName="selected">
                    Active
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/completed" activeClassName="selected">
                    Completed
                  </NavLink>
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
    </Router>
  );
};

export default App;
