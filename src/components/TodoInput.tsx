import React from "react";
import useInput from "../hooks/useInput";

type Props = {
  onCreate: (value: string) => void;
};
const TodoItem = ({ onCreate }: Props) => {
  const { value, onChange, onKeyUp } = useInput({ onCreate });

  return (
    <input
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      className="new-todo"
      placeholder="What needs to be done?"
    />
  );
};

export default TodoItem;
