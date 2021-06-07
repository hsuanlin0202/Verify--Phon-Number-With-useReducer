import React from "react";
import { FormTypes } from "../types";

type VerifiedProps = {
  setValue: React.Dispatch<React.SetStateAction<FormTypes>>;
  onClick: () => void;
};

export function Verified({ setValue, onClick }: VerifiedProps) {
  function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault;
    setValue({ phone: "", verifyCode: "" });
    onClick();
  }
  return (
    <section>
      <h2>3. Your phone number has been verified successfully.</h2>

      <button type="button" onClick={onClickHandler}>
        Again
      </button>
    </section>
  );
}
