import uuid from "uuid";

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = {
        id: uuid.v4(),
        text: action.payload
      };

      const addedTasks = [...state.task, newTask];

      return {
        ...state,
        task: addedTasks
      };
    case "DELETE_TASK":
      const deletedTasks = state.task.filter(
        task => task.id !== action.payload
      );

      return {
        ...state,
        task: deletedTasks
      };
    case "SET_CURRENT_TASK":
      return {
        ...state,
        currentTask: action.payload
      };
    case "UPDATE_TASK":
      const updatedTask = {
        ...state.currentTask,
        text: action.payload
      };

      const updatedTasksIndex = state.task.findIndex(
        task => task.id === state.currentTask.id
      );

      const updatedTasks = [
        ...state.task.slice(0, updatedTasksIndex),
        updatedTask,
        ...state.task.slice(updatedTasksIndex + 1)
      ];

      return {
        currentTask: null,
        task: updatedTasks
      };
    default:
      return state;
  }
}
