import React from "react";

const ConditionalRendering = () => {
  // AND - &&
  // OR - ||
  // ternary operator -
  let IT = true;
  //   const age = 22;

  const name = "EKIP";

  //   if(name === "EKIP") {
  //     "search dound"
  //   }else{
  //     "no results"
  //   }

  const age = 26;

  //   if age below 26 print " below age"
  //   if above 26 print " above age"
  return (
    <div>
      <div>{IT && "EKIP"}</div>
      <div>{name === "EKIP" ? "search found" : "no results"}</div>
      <h2>{age < 27 ? "below age" : "above age"}</h2>
    </div>
  );
};

export default ConditionalRendering;
