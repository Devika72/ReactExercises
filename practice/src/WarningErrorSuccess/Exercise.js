import { useState } from "react";
import "./App.css";

function Toast({
  displayHide,
  buttonText,
  toastTitle,
  toastDesc,
  toastColor,
  toastBG
}) {
  const [displayToast, setDisplayToast] = useState(false);

  return (
    <div>
      <button onClick={() => displayHide(setDisplayToast, displayToast)}>
        {buttonText}
      </button>
      {displayToast ? (
        <div
          style={{
            width: "90%",
            maxWidth: "300px",
            margin: "2rem auto",
            border: "2px solid",
            padding: "1rem",
            backgroundColor: toastBG,
            color: toastColor
          }}
        >
          <div style={{ textAlign: "right" }}>
            <button
              style={{
                border: "none",
                color: "white",
                backgroundColor: toastColor
              }}
              onClick={() => displayHide(setDisplayToast, displayToast)}
              className="hideButton"
            >
              Hide
            </button>
          </div>
          <div className="text-part">
            <h3>{toastTitle}</h3>
            <p>{toastDesc}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export function Exercise() {
  function displayHide(setDisplayToast, displayToast) {
    setDisplayToast((displayToast) => !displayToast);
  }
  return (
    <div className="Exercise9">
      <h1>Toast Example</h1>
      <div>
        <Toast
          displayHide={displayHide}
          buttonText="show warning"
          toastTitle="This is a Warning!"
          toastDesc="Do not copy paste this content."
          toastColor="orange"
          toastBG="#f4f3f3"
        />
        <Toast
          displayHide={displayHide}
          buttonText="show error"
          toastTitle="This is an Error!"
          toastDesc="Do not copy paste this content."
          toastColor="red"
          toastBG="#f4f3f3"
        />

        <Toast
          displayHide={displayHide}
          buttonText="show success"
          toastTitle="Success!"
          toastDesc="Successfully submitted your data."
          toastColor="green"
          toastBG="#f4f3f3"
        />
      </div>
    </div>
  );
}
