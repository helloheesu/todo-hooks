import React, { ChangeEvent } from "react";

type Props = {
  todo: Todo;
  onRemove: (id: Id) => void;
  onToggleComplete: (id: Id, isComplete: boolean) => void;
};
const TodoItem = ({ todo, onRemove, onToggleComplete }: Props) => {
  const { id, value, isComplete } = todo;
  const handleClickRemove = () => onRemove(id);
  const handleChangeComplete = ({ target }: ChangeEvent<HTMLInputElement>) =>
    onToggleComplete(id, target.checked);

  return (
    <li className={isComplete ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isComplete}
          onChange={handleChangeComplete}
        />
        <label>{value}</label>
        <button className="destroy" onClick={handleClickRemove}></button>
      </div>
      <input className="edit" value={value} />
    </li>
  );
};

export default TodoItem;
