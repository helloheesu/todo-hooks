import React from "react";
import useInput from "./hooks/useInput";

type Props = {
  onCreate: (value: string) => void;
};
const TodoItem = ({ onCreate }: Props) => {
  const inputHook = useInput({ onCreate });

  return (
    <input
      {...inputHook}
      className="new-todo"
      placeholder="What needs to be done?"
    />
  );
};

export default TodoItem;
