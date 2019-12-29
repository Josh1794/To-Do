import React, { useContext } from "react";
import ToDoContext from "../context";
import ToDo from "./ToDo";

export default function TaskList() {
  const { state } = useContext(ToDoContext);
  return (
    <div classname="notes-container">
      {state.todo.map((todo, i) => {
        return <ToDo todo={todo} key={i} />;
      })}
    </div>
  );
}
