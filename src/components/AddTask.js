import React, { useState, useContext, useRef, useEffect } from "react";
import ToDoContext from "../context";

export default function AddTask() {
  const { dispatch } = useContext(ToDoContext);
  const [value, setValue] = useState("");

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === "") {
      alert("Cannot add a blank task");
    } else {
      dispatch({ type: "ADD_TASK", payload: value });
      setValue("");
    }
  };

  return (
    <div className="note-form">
      <form onSubmit={handleSubmit} action="">
        <input type="text" ref={ref} onChange={handleChange} value={value} />
        <button>Add Task</button>
      </form>
    </div>
  );
}
