import React, { useState } from "react";

const TodoList = () => {
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showItems, setShowItems] = useState(true);

  const [showDiv, setShowDiv] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue([...value, inputValue]);
    setInputValue("");
  };

  // string
  // number
  // array
  // object
  // boolean

  // take a element div use boolean to hide and show on clicking a button

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" />
      </form>
      {showItems && (
        <ul>
          {value.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      )}
      <button onClick={() => setShowItems(!showItems)}>
        {showItems ? "hide items" : "show Items"}
      </button>

      {showDiv && (
        <div>
          <h3>Rahul</h3>
        </div>
      )}
      <button onClick={() => setShowDiv(!showDiv)}> button </button>
    </div>
  );
};

export default TodoList;
