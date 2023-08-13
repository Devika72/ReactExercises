import { useState } from "react";
import "./App.css";


function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  return (
    <div>
      <InputPassword
        placeholder="type password"
        data={password}
        setData={setPassword}
      />
      <br />
      <InputPassword
        placeholder="re-type password"
        data={rePassword}
        setData={setRePassword}
      />
      <br />
      <button
        type="submit"
        disabled={
          password !== "" && rePassword !== "" && password === rePassword
            ? false
            : true
        }
        onClick={(e) => {
          alert("password is set");
        }}
      >
        Submit
      </button>
    </div>
  );
}

function InputPassword({ placeholder, data, setData }) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <label>
      <input
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        type={isHidden ? "password" : "text"}
        placeholder={placeholder}
      />
      <span
        onClick={(e) => {
          //when show button is clicked- before changing the state- it will be true
          if (isHidden) {
            e.target.innerText = "hide";
          } else {
            e.target.innerText = "show";
          }
          setIsHidden((isHidden) => !isHidden);
        }}
        style={{ cursor: "pointer" }}
      >
        show
      </span>
    </label>
  );
}

export function Exercise() {
  return (
    <div className="Exercise5">
      <h1>Show Password</h1>
      <ResetPasswordForm />
    </div>
  
  );
}
