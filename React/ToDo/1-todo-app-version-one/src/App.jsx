import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ToDoItem1 from "./components/TodoItem1";
import ToDoItem2 from "./components/TodoItem2";
import "./App.css";



function App() {
  return (
    <center className="todo">
      <AppName/>
      <AddTodo/>
      <div className="items">
        <ToDoItem1/>
        <ToDoItem2/>
      </div>

    </center>
  );
}

export default App;
