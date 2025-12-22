function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row kk-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Task Here" />
        </div>
        <div class="col-4">
          <input type="datetime-local" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kk-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
