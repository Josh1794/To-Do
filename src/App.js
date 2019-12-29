import React, { useContext, useReducer } from "react";
import ToDoContext from "./context";
import ToDoReducer from "./reducer";
import Nav from "./components/Nav";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const initialState = useContext(ToDoContext);
  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      <Nav />
      <AddTask />
      <TaskList />
    </ToDoContext.Provider>
  );
}

export default App;
