import { useState } from "react";
import "./App.css";

function ResetPassForm() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  

  function doesMatch() {
    if (password !== "" && rePassword !== "" && password === rePassword) {
      return false;
    }
    return true;
  }

  return (
    <div>
      <h1>Disable Submit Problem</h1>
      <input
        value={password}
        placeholder="type password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <input
        value={rePassword}
        placeholder="re-type password"
        onChange={(e) => {
          setRePassword(e.target.value);
        }}
      />
      <br />
      
      <button
        type="submit"
        disabled={doesMatch()}
        onClick={() => {
          alert("Password is reset");
          setPassword("");
          setRePassword("");
        }}
      >
        submit
      </button>
    </div>
  );
}
export function Exercise() {
  return (
    <div className="Exercise4">
      <ResetPassForm />
    </div>
  );
}
