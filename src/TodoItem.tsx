import React from "react";

type Props = {
  todo: Todo;
};
const TodoItem = ({ todo }: Props) => {
  const { value, isComplete } = todo;
  return (
    <li className={isComplete ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={isComplete} />
        <label>{value}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value={value} />
    </li>
  );
};

export default TodoItem;
