import React from "react";

const ToDoContext = React.createContext({
  currentToDo: null,
  todo: [
    { id: 1, text: "Do HomeWork" },
    { id: 2, text: "Go Home" },
    { id: 2, text: "Make Call" }
  ]
});

export default ToDoContext;
