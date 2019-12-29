import React from "react";

export default function ToDo({ todo }) {
  return (
    <div className="note">
      <p>{todo.text}</p>
      <div className="btn-container">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
}
