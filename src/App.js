import React, { useContext, useReducer } from "react";
import ToDoContext from "./context";
import ToDoReducer from "./reducer";
import Nav from "./components/Nav";

function App() {
  const initialState = useContext(ToDoContext);
  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      <Nav />
    </ToDoContext.Provider>
  );
}

export default App;
