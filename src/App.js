import React, { createContext } from "react";
import RoutesComponent from "./routes/index";

export const SitContext = createContext();
function App() {
  const rule = "yes";

  return (
    <SitContext.Provider value={{ rule }}>

      <div className="App">
        <RoutesComponent />
      </div>
    </SitContext.Provider>
  );
}

export default App;