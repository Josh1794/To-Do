import React from "react";

const ToDoContext = React.createContext({
  currentTask: null,
  task: [
    { id: 1, text: "Do HomeWork" },
    { id: 2, text: "Go Home" },
    { id: 3, text: "Make Call" }
  ]
});

export default ToDoContext;
