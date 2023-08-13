import { useState } from "react";
import "./App.css";

let listItemName = "";

function List({ item }) {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <li
      style={{
        textAlign: "left",
        border: "1px solid",
        padding: "0.5rem 1rem",
        margin: "0.5rem",
        cursor: "pointer",
        textDecoration: `${isComplete ? "line-through" : "none"}`
      }}
      onClick={() => {
        setIsComplete((isComplete) => !isComplete);
      }}
    >
      {item}
    </li>
  );
}

function ToDo() {
  const [items, setItems] = useState([]);
  console.log(items);
  return (
    <div style={{ width: "100%", maxWidth: "400px", margin: "auto" }}>
      <h1>Todo List</h1>
      <input
        onChange={(e) => {
          listItemName = e.target.value;
        }}
        placeholder="add task"
      />
      <button
        onClick={(e) => {
          setItems((items) => [
            ...items,
            { srno: items.length + 1, name: listItemName }
          ]);
        }}
      >
        +
      </button>
      <ul style={{ listStyle: "none" }}>
        {items.map((item) => {
          return <List key={item.srno} item={item.name} />;
        })}
      </ul>
    </div>
  );
}
export function Exercise() {
  return (
    <div className="Exercise10">
      <ToDo />
    </div>
  );
}
