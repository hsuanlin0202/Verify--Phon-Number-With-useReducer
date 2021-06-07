import React from "react";
import { FormTypes } from "../types";

type EnterPhoneNumberProps = {
  value: FormTypes;
  setValue: React.Dispatch<React.SetStateAction<FormTypes>>;
  onClick: () => void;
};
export function EnterPhoneNumber({
  value,
  setValue,
  onClick,
}: EnterPhoneNumberProps) {
  function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault;

    // Send Code
    onClick();
  }
  return (
    <section>
      <h2>1. Enter your phone number.</h2>

      <input
        type="text"
        value={value.phone}
        onChange={(e) => setValue({ ...value, phone: e.target.value })}
      />

      <button onClick={(e) => onClickHandler(e)}>Next</button>
    </section>
  );
}
