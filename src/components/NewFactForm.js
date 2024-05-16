import React, { useState } from "react";
import { CATEGORIES } from "../constants/categories";

function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    // Prevent the page from reloading whenever we submit a form
    e.preventDefault();
    // Check if data is valid
    if (text && source && category && text.length <= 200) {
      // Creare a new fact object
      const newFact = {
        id: Math.round(Math.random() * 100000000),
        text,
        source,
        category,
        createdIn: 2021,
      };

      // Add the fact to state
      setFacts((facts) => [newFact, ...facts]);

      // Reset input fields
      setText("");
      setSource("");
      setCategory("");

      // Close the form automatically

      setShowForm(false);
    }
  }

  const textLength = text.length;

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      {/* CONTROLLED COMPONENT 
        (react has full control of the input field)
        e - element object
        e.target : current element 
        */}
      <input
        type="text"
        placeholder="Share a fact..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span>{200 - textLength}</span>
      <input
        value={source}
        type="text"
        placeholder="Source"
        onChange={(e) => setSource(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose Category</option>
        {CATEGORIES.map((cat) => (
          <option id={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
}

export default NewFactForm;
