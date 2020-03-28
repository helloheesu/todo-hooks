import React, { useState, ChangeEvent } from "react";
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

  const handleToggleCompleteAll = (isComplete: boolean) => {
    const newTodoList = todoList.map(todo => ({
      ...todo,
      isComplete
    }));

    setTodoList(newTodoList);
  };

  const handleClickToggleComplete = ({
    target
  }: ChangeEvent<HTMLInputElement>) => handleToggleCompleteAll(target.checked);

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
              <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                onChange={handleClickToggleComplete}
              />
              <label htmlFor="toggle-all">Mark all as complete</label>
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
