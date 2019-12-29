import React, { useContext, useReducer } from "react";
import toDoContext from "./context";

function App() {
  const initialState = useContext(toDoContext);
  return <div>Hello</div>;
}

export default App;
