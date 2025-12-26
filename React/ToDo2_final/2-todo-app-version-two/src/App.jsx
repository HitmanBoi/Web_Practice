import { useRef, useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ToDoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      task: "Buy Milk",
      dueDate: "15/12/2025",
    },
    {
      task: "Buy Protein",
      dueDate: "20/12/2025",
    },
    {
      task: "RoadMap Extension",
      dueDate: "25/12/2025",
    },
  ];

  let [tasks, setTask] = useState(todoItems);

  let addButtonHandler = (taskValue, dateValue) => {
    console.log(taskValue, dateValue);
    if (taskValue != "" && dateValue != "") {
      setTask((cval) => [...cval, { task: taskValue, dueDate: dateValue }]);
    } else {
      console.log("Enter valid values first.");
    }
  };

  let removeButtonHandelor = (name) => {
    let removedArr = tasks.filter((i) => i.task != name);
    console.log(removedArr);
    setTask(removedArr);
  };

  return (
    <center className="todo">
      <AppName />
      <AddTodo addButtonHandler={addButtonHandler}></AddTodo>
      <ToDoItems
        todoItems={tasks}
        removeHandler={removeButtonHandelor}
      ></ToDoItems>
    </center>
  );
}

export default App;
