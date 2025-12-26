function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row kk-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Task Here" />
        </div>
        <div className="col-4">
          <input type="datetime-local" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kk-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
