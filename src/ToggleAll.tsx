import React, { ChangeEvent } from "react";

type Props = {
  onToggleAllComplete: (isCompleteAll: boolean) => void;
};
const ToggleAllComplete = ({ onToggleAllComplete }: Props) => {
  const handleChangeAllComplete = ({ target }: ChangeEvent<HTMLInputElement>) =>
    onToggleAllComplete(target.checked);

  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={handleChangeAllComplete}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
};

export default ToggleAllComplete;
