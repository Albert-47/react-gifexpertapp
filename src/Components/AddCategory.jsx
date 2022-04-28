import React from "react";
import { useState } from "react";
const AddCategory = ({ setCategories }) => {
  const [input, setInput] = useState("");

  //Submit

  const handleSubmit = (e) => {
    e.preventDefault();

    setCategories((prev) => [input, ...prev]);

    setInput("");
  };

  //Input

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleInput} />
    </form>
  );
};

export default AddCategory;
