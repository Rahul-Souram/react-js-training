import React, { useEffect, useState } from "react";

const CompUseEffect = () => {
  const [number, setNumber] = useState(0);

  const url = `https://jsonplaceholder.org/comments`;

  useEffect(() => {
    console.log("outside");
  }, []);

  const [size, setSize] = useState(window.innerWidth);

  const handleSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    // initialization
    window.addEventListener("resize", handleSize);

    // cleanup function
    return () => {
      window.addEventListener("resize", handleSize);
    };
  }, [window]); //window as second parameter

  const [state, setState] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   first
  // logiv

  // cleanup
  //   return () => {
  //     second
  // logic of clean up function
  //   }
  // }, []) // secondary parameter

  //   take anumber in a state and whenerver the number changes it should print hello world in console

  return (
    <div>
      <h2>{number}</h2>
      <h2>{`Window size is ${size}PX`}</h2>
      <button onClick={() => setNumber(number + 1)}>change</button>
      {state.map((item) => {
        const { id, userId, comment } = item;
        return (
          <div key={id}>
            <h2>{userId}</h2>
            <h5>{comment}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default CompUseEffect;
