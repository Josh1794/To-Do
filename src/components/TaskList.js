import React, { useContext } from "react";
import ToDoContext from "../context";
import ToDo from "./ToDo";

export default function TaskList() {
  const { state } = useContext(ToDoContext);
  return (
    <div className="notes-container">
      {state.task.map((task, i) => {
        return <ToDo task={task} key={i} />;
      })}
    </div>
  );
}
