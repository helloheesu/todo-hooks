import React, { useState } from "react";
import { HashRouter as Router, NavLink } from "react-router-dom";

import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import ToggleAllComplete from "./ToggleAll";

import "./style.css";
import "./hover.css";

enum Filter {
  All,
  Active,
  Completed
}

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<Filter>(Filter.All);

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

  const handleEdit = (id: Id, value: TodoValue) => {
    const index = todoList.findIndex(todo => todo.id === id);
    if (index < 0) {
      return;
    }

    const oldTodo = todoList[index];

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1, {
      ...oldTodo,
      value
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

  const handleClickClearAllComplete = () => {
    const newTodoList = todoList.filter(({ isComplete }) => !isComplete);

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
                {todoList
                  .filter(({ isComplete }) => {
                    switch (selectedFilter) {
                      case Filter.Active:
                        return !isComplete;
                      case Filter.Completed:
                        return isComplete;
                      default:
                      case Filter.All:
                        return true;
                    }
                  })
                  .map(todo => (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      onRemove={handleRemove}
                      onToggleComplete={handleToggleComplete}
                      onEdit={handleEdit}
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
                  <NavLink
                    exact
                    to="/"
                    activeClassName="selected"
                    onClick={() => setSelectedFilter(Filter.All)}
                  >
                    All
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/active"
                    activeClassName="selected"
                    onClick={() => setSelectedFilter(Filter.Active)}
                  >
                    Active
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/completed"
                    activeClassName="selected"
                    onClick={() => setSelectedFilter(Filter.Completed)}
                  >
                    Completed
                  </NavLink>
                </li>
              </ul>
              {todoList.some(({ isComplete }) => isComplete) && (
                <button
                  className="clear-completed"
                  onClick={handleClickClearAllComplete}
                >
                  Clear completed
                </button>
              )}
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
