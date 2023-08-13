import { useState } from "react";
import "./App.css";


function FormInput() {
  const [password, setPassword] = useState("");

  function checkPassword() {
    if (password !== "") {
      if (
        /^([a-zA-Z0-9])+$/.test(password) &&
        /[0-9]+/.test(password) &&
        /[a-zA-Z]+/.test(password)
      ) {
        return "strong password";
      }
      return "please include at least one number and alphabets";
    }
  }
  return (
    <div>
      <input
        value={password}
        placeholder="Enter password"
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div>{checkPassword()}</div>
    </div>
  );
}

export function Exercise() {
  return (
    <div className="Exercise3">
      <h1>Reset Password</h1>
      <FormInput />
    </div>
  );
}
