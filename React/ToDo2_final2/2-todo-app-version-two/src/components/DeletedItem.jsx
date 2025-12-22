import { useContext } from "react";
import { ImCross} from "react-icons/im";
import { todoItemsContext } from "../store/todoItemsStore";
function DeletedItem() {
  const {removeTask } = useContext(todoItemsContext)
  const {todoName , todoDate } = useContext(todoItemsContext)
    return (
    <div className="container">
        <div className="row kk-row text-decoration-line-through">
          <div className="col-6">
            {todoName}
          </div>
          <div className="col-4">
            {todoDate}
          </div>
          <div className="col-2">
            <button 
            type="button" 
            className="btn btn-danger kk-button"
            onClick={() => removeTask(todoName)}
            >
              <ImCross />
            </button>
          </div>
        </div>
      </div>
    );
}

export default DeletedItem;