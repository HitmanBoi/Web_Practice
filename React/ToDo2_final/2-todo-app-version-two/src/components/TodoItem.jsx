function ToDoItem({todoName , todoDate , deleteHandler}) {
    return (
    <div className="container">
        <div className="row kk-row">
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
            onClick={(event)=>deleteHandler(event,todoName,todoDate)}>
              Delete
            </button>

          </div>
        </div>
      </div>
    );
}

export default ToDoItem;