import React from "react";
import SecondComponent from "./components/SecondComponent";
import ConditionalRendering from "./components/ConditionalRendering";

function App() {

  // props

  const FirstComponent = ({ name, role }) => {
    // const { name, role } = props;

    return (
      <div>
        <h2>Card</h2>
        <h3>name: {name}</h3>
        <p>{role}</p>
      </div>
    )
  }

  // const arr = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* {
        arr.map((item) => {
          return (
            <>
              <FirstComponent /> {item}
            </>
          )
        })
      } */}

      {/* <FirstComponent name="Rahul" role="dev" /> */}
      {/* <SecondComponent /> */}
      <ConditionalRendering />
    </div>
  );
}

export default App;