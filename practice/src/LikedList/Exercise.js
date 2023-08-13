import { useState } from "react";
import "./App.css";
let items = [
  {
    id: 1,
    desc:
      "Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below.",
    author: "Master Yuan-Ma, The Book of Programming"
  },
  {
    id: 2,
    desc:
      "And my heart glows bright red under my filmy, translucent skin and they have to administer 10cc of JavaScript to get me to come back. (I respond well to toxins in the blood.) Man, that stuff will kick the peaches right out your gills!",
    author: "_why, Why's (Poignant) Guide to Ruby"
  },
  {
    id: 3,
    desc:
      "People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.",
    author: "Donald Knuth"
  },
  {
    id: 4,
    desc:
      "On two occasions I have been asked, ‘Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?’ [...] I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.",
    author: "Charles Babbage, Passages from the Life of a Philosopher (1864)"
  },
  {
    id: 5,
    desc:
      "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies.",
    author: "C.A.R. Hoare, 1980 ACM Turing Award Lecture"
  }
];
function Like({ likes, setLikes }) {
  return (
    <div>
      <button
        style={{
          marginTop: "0.5rem",
          border: "none",
          fontSize: "1.2rem",
          background: "transparent",
          cursor: "pointer"
        }}
        onClick={() => {
          setLikes((likes) => likes + 1);
        }}
      >
        <span role="img" alt="like">
          ❤️
        </span>
      </button>
      {likes}
    </div>
  );
}
function List({ item }) {
  const [likes, setLikes] = useState(0);
  return (
    <li>
      <div>"{item.desc}"</div>
      <div style={{ paddingTop: "0.5rem" }}>
        -<i>{item.author}</i>
      </div>
      <Like likes={likes} setLikes={setLikes} />
    </li>
  );
}
export function Exercise() {
  return (
    <div className="Exercise12">
      <h1>Eloquent Javascript</h1>
      <ul>
        {items.map((item) => {
          return <List key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}
