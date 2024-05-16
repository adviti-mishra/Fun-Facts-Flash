import React from "react";
import { CATEGORIES } from "../constants/categories";

function Fact({ fact }) {
  return (
    <li className="fact">
      <p>
        {fact.text}
        <a className="source" href={fact.source} target="_blank" rel="noopener noreferrer">
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category).color,
        }}
      >
        {fact.category}
      </span>
    </li>
  );
}

export default Fact;
