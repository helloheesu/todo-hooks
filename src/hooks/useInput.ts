import { useState, KeyboardEvent, ChangeEvent, useEffect } from "react";

type Props = {
  onCreate: (value: string) => void;
  initialValue?: string;
};

const useInput = ({ onCreate, initialValue = "" }: Props) => {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

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
