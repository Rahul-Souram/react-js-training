import React, { useEffect, useRef } from "react";

const CompUseRef = () => {
  const nameRef = useRef(null);

  const changeColor = () => {
    if (nameRef.current) {
      nameRef.current.style.color = "green";
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
        style={{
          width: "50px",
          height: "50px",
          background: "yellow",
          marginLeft: "2rem",
        }}
      ></div>
    </div>
  );
};

export default CompUseRef;
