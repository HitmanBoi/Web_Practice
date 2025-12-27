const Loader = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div className="spinner-border" role="status" style={{height:"3rem" , width:"3rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
