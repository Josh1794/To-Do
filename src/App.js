import React, { useContext, useReducer } from "react";
import ToDoContext from "./context";
import ToDoReducer from "./reducer";
import Nav from "./components/Nav";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";

function App() {
  const initialState = useContext(ToDoContext);
  const [state, dispatch] = useReducer(ToDoReducer, initialState);
  console.log(state);
  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      <Nav />
      {state.currentTask === null ? (
        <div>
          <AddTask />
          <TaskList />
        </div>
      ) : (
        <EditTask />
      )}
    </ToDoContext.Provider>
  );
}

export default App;
