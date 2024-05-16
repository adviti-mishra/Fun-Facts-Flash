import React from "react";
import Fact from "./Fact";

function FactsList({ facts }) {
  if (facts.length === 0) {
    return <p className="message">No facts for this category yet. Create the first one!</p>;
  }

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </ul>
      <p>There are {facts.length} facts listed. Add more!</p>
    </section>
  );
}

export default FactsList;
