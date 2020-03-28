import React from "react";

type Props = {
  todo: Todo;
  onRemove: (id: Id) => void;
};
const TodoItem = ({ todo, onRemove }: Props) => {
  const { id, value, isComplete } = todo;
  const handleClickRemove = () => onRemove(id);

  return (
    <li className={isComplete ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={isComplete} />
        <label>{value}</label>
        <button className="destroy" onClick={handleClickRemove}></button>
      </div>
      <input className="edit" value={value} />
    </li>
  );
};

export default TodoItem;
