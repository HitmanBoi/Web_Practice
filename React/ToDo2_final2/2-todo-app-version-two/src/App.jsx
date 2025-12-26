import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ToDoItems from "./components/TodoItems";
import "./App.css";
import ToDoItemContextProvider, {
  todoItemsContext,
} from "./store/todoItemsStore";

function App() {
  return (
    <ToDoItemContextProvider>
      <center className="todo">
        <AppName />
        <AddTodo></AddTodo>
        <ToDoItems></ToDoItems>
      </center>
    </ToDoItemContextProvider>
  );
}

export default App;
