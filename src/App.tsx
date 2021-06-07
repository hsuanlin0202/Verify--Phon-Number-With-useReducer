import React, { useReducer, useState } from "react";
import {
  EnterPhoneNumber,
  ResendVerifyCode,
  Verified,
  VerifyPhoneNumber,
} from "./components";
import { FormTypes } from "./types";

type Action =
  | { type: "send" }
  | { type: "counting" }
  | { type: "resend" }
  | { type: "submit" }
  | { type: "retry" };
type State = {
  type: "init" | "sent" | "resend" | "success";
};
function reducer(state: State, action: Action): State {
  if (action.type === "send") {
    return { ...state, type: "sent" };
  }

  if (action.type === "counting") {
    return { ...state, type: "sent" };
  }

  if (action.type === "resend") {
    return { ...state, type: "resend" };
  }

  if (action.type === "submit") {
    return { ...state, type: "success" };
  }

  if (action.type === "retry") {
    return { ...state, type: "init" };
  }

  return state;
}

function App() {
  const [form, setForm] = useState<FormTypes>({
    phone: "",
    verifyCode: "",
  });

  const [state, dispatch] = useReducer(reducer, { type: "init" });

  return (
    <div className="App" style={{ padding: "0 2rem" }}>
      <h1 className="App-header">useReducer Testing - Verify Phone Number</h1>

      <main>
        {state.type === "init" && (
          <EnterPhoneNumber
            value={form}
            setValue={setForm}
            onClick={() => dispatch({ type: "counting" })}
          />
        )}
        {state.type === "sent" && (
          <VerifyPhoneNumber
            value={form}
            setValue={setForm}
            resend={() => dispatch({ type: "resend" })}
            submit={() => dispatch({ type: "submit" })}
          />
        )}

        {state.type === "resend" && (
          <ResendVerifyCode
            value={form}
            setValue={setForm}
            resend={() => dispatch({ type: "counting" })}
            submit={() => dispatch({ type: "submit" })}
          />
        )}
        {state.type === "success" && (
          <Verified
            setValue={setForm}
            onClick={() => dispatch({ type: "retry" })}
          />
        )}
      </main>
    </div>
  );
}

export default App;
