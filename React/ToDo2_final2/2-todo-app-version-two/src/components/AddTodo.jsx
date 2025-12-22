import { useContext, useRef } from "react";
import { ImPlus } from "react-icons/im";
import { todoItemsContext } from "../store/todoItemsStore";

function AddTodo() {
  const {addTask} = useContext(todoItemsContext);


  let taskValue = useRef()
  let dateValue = useRef()

  let addClickHandle = () => {
    addTask(taskValue.current.value,dateValue.current.value);
    taskValue.current.value='';
    dateValue.current.value='';

  }
  return (
    <div 
    className="container text-center">
      <div className="row kk-row">
        <div className="col-6">
          <input 
          id="task" 
          ref={taskValue}
          type="text" 
          placeholder="Enter Task Here" />
        </div>
        <div  className="col-4">
          <input
          id="date"
          ref={dateValue}
          type="date" />
        </div>
        <div className="col-2">
          <button 
          id="button"
          type="button" 
          className="btn btn-success kk-button"
          onClick={addClickHandle}>
            <ImPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
