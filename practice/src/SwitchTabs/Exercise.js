import { useState } from "react";
import "./App.css";

function Home() {
  return (
    <div>
      <h1>This is Homepage</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. 
      </p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is About page</h1>
      <p>
      Bold- Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
      </p>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1>This is Profile Page</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. 
      </p>
    </div>
  );
}



function RouterButton({ buttonLabel, setPage }) {
  function onClickHandler(e) {
    setPage(e.target.innerText);
  }

  return <button onClick={onClickHandler}>{buttonLabel}</button>;
}
export function Exercise() {
  const [page, setPage] = useState("Home");

  function setPageData(e) {
    if (page === "Home") {
      return <Home />;
    }
    if (page === "About") {
      return <About />;
    }
    return <Profile />;
  }
  console.log(page);

  return (
    <div className="Exercise8">
      <div>
        <RouterButton buttonLabel={"Home"} setPage={setPage} />
        <RouterButton buttonLabel={"About"} setPage={setPage} />
        <RouterButton buttonLabel={"Profile"} setPage={setPage} />
      </div>
      {setPageData()}
    </div>
  );
}
