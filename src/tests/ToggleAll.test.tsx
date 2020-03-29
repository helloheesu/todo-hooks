import React from "react";
import { render } from "@testing-library/react";
import ToggleAll from "../components/ToggleAll";

describe("Toggle All > When 3 items are given", () => {
  const isAllCompleteChecked = (container: HTMLElement) => {
    const toggle = container.querySelector<HTMLInputElement>(
      'input[type="checkbox"]'
    );
    return toggle?.checked;
  };

  it("When all 3 items are uncomplete, allComplete should be unchecked", () => {
    const { container } = render(
      <ToggleAll
        isCompleteList={[false, false, false]}
        onToggleAllComplete={() => {}}
      />
    );
    expect(isAllCompleteChecked(container)).toBeFalsy();
  });
  it("When 1 item is complete and others are uncomplete, allComplete should be unchecked", () => {
    const { container } = render(
      <ToggleAll
        isCompleteList={[false, true, false]}
        onToggleAllComplete={() => {}}
      />
    );
    expect(isAllCompleteChecked(container)).toBeFalsy();
  });
  it("When all 3 items are complete, allComplete should be checked", () => {
    const { container } = render(
      <ToggleAll
        isCompleteList={[true, true, true]}
        onToggleAllComplete={() => {}}
      />
    );
    expect(isAllCompleteChecked(container)).toBeTruthy();
  });
});
