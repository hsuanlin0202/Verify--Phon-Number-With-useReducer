import React, { useEffect, useState } from "react";
import { FormTypes } from "../types";
type VerifyPhoneNumberProps = {
  value: FormTypes;
  setValue: React.Dispatch<React.SetStateAction<FormTypes>>;
  resend: () => void;
  submit: () => void;
};

export function VerifyPhoneNumber({
  value,
  setValue,
  resend,
  submit,
}: VerifyPhoneNumberProps) {
  const countTime = 10;

  const [countdown, setCountdown] = useState(countTime);

  useEffect(() => {
    if (countdown === 0) {
      resend();
      setCountdown(countTime);
    }
    setTimeout(() => setCountdown(countdown - 1), 1000);
  }, [countdown]);

  function submitHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault;

    // Verify Code
    submit();
  }

  return (
    <section>
      <h2>2. Enter your OTP Code here.</h2>

      <div style={{ marginBottom: "0.5rem" }}>
        <input type="text" value={value.phone} disabled />
        <button
          type="button"
          disabled={true}
        >{`Resend (${countdown}s)`}</button>
      </div>

      <div>
        <input
          type="text"
          value={value.verifyCode}
          onChange={(e) => setValue({ ...value, verifyCode: e.target.value })}
        />
      </div>

      <div style={{ paddingTop: "0.5rem" }}>
        <button type="button" onClick={(e) => submitHandler(e)}>
          Verify
        </button>
      </div>
    </section>
  );
}
