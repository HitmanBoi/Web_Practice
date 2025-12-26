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
  return (
    <center className="todo">
      <AppName />
      <AddTodo />
      <ToDoItems todoItems={todoItems}></ToDoItems>
    </center>
  );
}

export default App;
