import React, { useState } from "react";

const CompuseState = () => {
  //   const [state, setState] = useState("hello");

  const [value, setValue] = useState(0);
  //   console.log(state, setState);

  //   decrement number by 1
  return (
    <div>
      {/* <h2>{state}</h2>
      <button onClick={() => setState("hii")}>change word </button> */}
      <h3>{value}</h3>
      <button onClick={() => setValue(value + 1)}>increment</button>
      <button
        onClick={() => {
          setValue(0);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default CompuseState;
