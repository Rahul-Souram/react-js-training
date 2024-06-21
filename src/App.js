import React from "react";
import SecondComponent from "./components/SecondComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import CompuseState from "./components/CompuseState";
import FormComp from "./components/FormComp";
import TodoList from "./components/TodoList";
import CompUseEffect from "./components/CompUseEffect";
import CompUseRef from "./components/CompUseRef";

function App() {

  // props

  // const FirstComponent = ({ name, role }) => {
  //   // const { name, role } = props;

  //   return (
  //     <div>
  //       <h2>Card</h2>
  //       <h3>name: {name}</h3>
  //       <p>{role}</p>
  //     </div>
  //   )
  // }

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
      {/* <ConditionalRendering /> */}
      {/* <CompuseState /> */}
      {/* <FormComp /> */}
      {/* <TodoList /> */}
      {/* <CompUseEffect /> */}
      <CompUseRef />
    </div>
  );
}

export default App;