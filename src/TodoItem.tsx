import React, { ChangeEvent, MouseEvent, useState } from "react";
import useInput from "./hooks/useInput";

type Props = {
  todo: Todo;
  onRemove: (id: Id) => void;
  onToggleComplete: (id: Id, isComplete: boolean) => void;
  onEdit: (id: Id, value: TodoValue) => void;
};
const TodoItem = ({ todo, onRemove, onToggleComplete, onEdit }: Props) => {
  const { id, value, isComplete } = todo;
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleClickRemove = () => onRemove(id);
  const handleChangeComplete = ({ target }: ChangeEvent<HTMLInputElement>) =>
    onToggleComplete(id, target.checked);

  const handleClickEdit = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    setIsEditing(true);
  };
  const handleEdit = (value: string) => {
    onEdit(id, value);
    setIsEditing(false);
  };
  const inputHook = useInput({
    onCreate: handleEdit,
    initialValue: value
  });

  return (
    <li
      className={isEditing ? "editing" : isComplete ? "completed" : ""}
      onDoubleClick={handleClickEdit}
    >
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
      <input {...inputHook} className="edit" />
    </li>
  );
};

export default TodoItem;
