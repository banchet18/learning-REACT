import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    return setPeople([]);
  };

  return (
    <main className="main">
      <section className="container container1">
        <h2 className="h2">{people.length} persons have birthday today</h2>
        <List people={people} />
        <button type="button" onClick={handleClick}>
          Clear <All></All>
        </button>
      </section>
    </main>
  );
};

export default App;
