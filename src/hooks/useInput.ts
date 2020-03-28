import { useState, KeyboardEvent, ChangeEvent } from "react";

type Props = {
  onCreate: (value: string) => void;
};

const useInput = ({ onCreate }: Props) => {
  const [value, setValue] = useState<string>("");

  const onKeyUp = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key !== "Enter") {
      return;
    }

    const trimmedValue = value.trim();
    if (!trimmedValue) {
      return;
    }

    onCreate(trimmedValue);
    setValue("");
  };

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setValue(value);
  };

  return { onKeyUp, onChange, value };
};

export default useInput;
