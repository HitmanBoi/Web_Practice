import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";


const Controls = () => {

  const countValue = useRef()
  const dispatch = useDispatch();



    const handleIncrement = () => {
        dispatch(counterActions.increment())
    }

    const handleDecrement = () => {
         dispatch(counterActions.decrement());
    }
    const handleAdd = () => {
        dispatch(counterActions.add(Number(countValue.current.value)));
    }

    const handleSub = () => {
         dispatch(counterActions.sub(Number(countValue.current.value)));
    }

    const handlePrivacy = () => {
         dispatch(privacyActions.toggle());
    }




  return (
    <>
    <button onClick={handlePrivacy} type="button" className="btn btn-info btn-lg px-4 gap-3">
        Privacy
      </button>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center custom-count">
      <button onClick={handleIncrement} type="button" className="btn btn-primary btn-lg px-4 gap-3">
        +1
      </button>
      <button onClick={handleDecrement} type="button" className="btn btn-outline-secondary btn-lg px-4">
        -1
      </button>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center custom-count">
      <input placeholder="Enter thy number" ref={countValue} />
      <button onClick={handleAdd} type="button" className="btn btn-primary btn-lg px-4 gap-3">
        Add
      </button>
      <button onClick={handleSub} type="button" className="btn btn-outline-secondary btn-lg px-4">
        Sub
      </button>
    </div>
    </>
  );
};


export default Controls
