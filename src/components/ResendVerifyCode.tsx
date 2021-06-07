import React from "react";
import { FormTypes } from "../types";

type ResendPhoneNumberProps = {
  value: FormTypes;
  setValue: React.Dispatch<React.SetStateAction<FormTypes>>;
  resend: () => void;
  submit: () => void;
};
export function ResendVerifyCode({
  value,
  setValue,
  resend,
  submit,
}: ResendPhoneNumberProps) {
  function resendHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault;
    // Resend code
    resend();
  }
  function onSubmitHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault;
    //Verify Code
    submit();
  }
  return (
    <section>
      <h2>2. Enter your OTP Code here.</h2>
      <div style={{ marginBottom: "0.5rem" }}>
        <input
          type="text"
          value={value.verifyCode}
          onChange={(e) => setValue({ ...value, verifyCode: e.target.value })}
        />
        <button type="button" onClick={resendHandler}>{`Resend`}</button>
      </div>

      <div>
        <input
          type="text"
          value={value.phone}
          onChange={(e) => setValue({ ...value, phone: e.target.value })}
        />
      </div>

      <div style={{ paddingTop: "0.5rem" }}>
        <button type="button" onClick={onSubmitHandler}>
          Verify
        </button>
      </div>
    </section>
  );
}
