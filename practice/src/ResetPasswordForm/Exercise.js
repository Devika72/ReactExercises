import { useState } from "react";
import "./App.css";

function ResetPasswordForm() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  function matchPasswords() {
    if (input1 !== "" && input2 !== "") {
      if (input1 !== input2) {
        return "Password doesn't match";
      }
    }
  }

  return (
    <div>
      <h1>Reset Password Form</h1>

      <input
        value={input1}
        placeholder="Type Password"
        required
        onChange={(e) => {
          setInput1(e.target.value);
        }}
      />
      <br />
      <input
        value={input2}
        placeholder="Re-type Password"
        required
        onChange={(e) => {
          setInput2(e.target.value);
        }}
      />
      <br />
      <div style={{ color: "red" }}>{matchPasswords()}</div>
    </div>
  );
}

export function Exercise() {
  return (
    <div className="Exercise2">
      <ResetPasswordForm />
    </div>
  );
}

