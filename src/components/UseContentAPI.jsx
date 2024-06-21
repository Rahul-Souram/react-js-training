import React, { useContext } from "react";
import { SitContext } from "../App";

const UseContentAPI = () => {
  const { rule } = useContext(SitContext);

  //   const AnotherComponent = ({ rule }) => {
  //     return <>{rule}</>;
  //   };
  //   const NextComponent = ({ rule }) => {
  //     return <AnotherComponent rule={rule} />;
  //   };
  //   const FirstComponent = ({ rule }) => {
  //     return <NextComponent rule={rule} />;
  //   };

  return <div>{rule}</div>;
};

export default UseContentAPI;
