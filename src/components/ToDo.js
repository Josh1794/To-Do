import React, { useContext } from "react";
import ToDoContext from "../context";

export default function ToDo({ task }) {
  const { dispatch } = useContext(ToDoContext);
  return (
    <div className="note">
      <p>{task.text}</p>
      <div className="btn-container">
        <button
          onClick={() => dispatch({ type: "SET_CURRENT_TASK", payload: task })}
          className="edit"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
          className="delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
