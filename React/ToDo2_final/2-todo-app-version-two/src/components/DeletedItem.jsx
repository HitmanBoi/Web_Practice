function DeletedItem({ todoName, todoDate, removeHandler }) {
  return (
    <div className="container">
      <div className="row kk-row text-decoration-line-through">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kk-button"
            onClick={() => removeHandler(todoName)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletedItem;
