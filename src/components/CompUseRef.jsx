import React, { useContext, useEffect, useRef } from "react";
import { SitContext } from "../App";

const CompUseRef = () => {
  const nameRef = useRef(null);
  const boxRef = useRef(null);

  const { rule } = useContext(SitContext);

  const changeColor = () => {
    if (nameRef.current) {
      nameRef.current.style.color = "green";
    }
  };

  const changeBackground = () => {
    if (boxRef.current) {
      boxRef.current.style.background = "green";
    }
  };

  useEffect(() => {
    changeColor();
  }, []);

  console.log(nameRef, "outside");

  return (
    <div>
      <h2 ref={nameRef}>Rahul</h2>
      <div
        ref={boxRef}
        style={{
          width: "50px",
          height: "50px",
          background: "yellow",
          marginLeft: "2rem",
        }}
      ></div>
      <button onClick={changeBackground}>change color {rule}</button>
    </div>
  );
};

export default CompUseRef;
