import React, { ChangeEvent } from "react";

type Props = {
  isCompleteList: boolean[];
  onToggleAllComplete: (isCompleteAll: boolean) => void;
};
const ToggleAllComplete = ({ isCompleteList, onToggleAllComplete }: Props) => {
  const handleChangeAllComplete = ({ target }: ChangeEvent<HTMLInputElement>) =>
    onToggleAllComplete(target.checked);

  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={handleChangeAllComplete}
        checked={isCompleteList.every(v => v)}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
};

export default ToggleAllComplete;
