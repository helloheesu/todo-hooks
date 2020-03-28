import React, { useState, KeyboardEvent, ChangeEvent } from "react";

type Props = {
  onCreate: (value: string) => void;
};
const TodoItem = ({ onCreate }: Props) => {
  const [input, setInput] = useState<TodoValue>("");

  const handleKeyup = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key !== "Enter") {
      return;
    }

    const value = input.trim();
    if (!value) {
      return;
    }

    onCreate(value);
    setInput("");
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setInput(value);
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      value={input}
      onKeyUp={handleKeyup}
      onChange={handleChange}
    />
  );
};

export default TodoItem;
