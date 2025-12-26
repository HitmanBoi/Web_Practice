import { useContext } from "react";
import { ImMinus } from "react-icons/im";
import { todoItemsContext } from "../store/todoItemsStore";
function ToDoItem() {
  const { todoName, todoDate, deleteHandler } = useContext(todoItemsContext);
  return (
    <div className="container">
      <div className="row kk-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kk-button"
            onClick={(event) => deleteHandler(event, todoName, todoDate)}
          >
            <ImMinus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
