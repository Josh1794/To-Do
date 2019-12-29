import React, { useState, useContext, useRef, useEffect } from "react";
import ToDoContext from "../context";

export default function EditNote() {
  const { state, dispatch } = useContext(ToDoContext);
  const [value, setValue] = useState(state.currentTask.text);

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
      dispatch({ type: "UPDATE_TASK", payload: value });
      setValue("");
    }
  };

  return (
    <div className="note-form">
      <form onSubmit={handleSubmit} action="">
        <textarea
          ref={ref}
          onChange={handleChange}
          value={value}
          name=""
          id=""
          cols="30"
          rows="10"
        />
        <div style={{ textAlign: "right" }}>
          <button>Update Task</button>
        </div>
      </form>
    </div>
  );
}
