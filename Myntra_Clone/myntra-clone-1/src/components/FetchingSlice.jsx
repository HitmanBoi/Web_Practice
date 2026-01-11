import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { useEffect } from "react";
import { itemActions } from "../store/itemSlice";

const FetchingSlice = () => {

    const fetchStatus = useSelector(store => store.fetchStatus)
     const dispatch = useDispatch();


        useEffect( () => {
        if(fetchStatus.fetchDone) return;
        let controller = new AbortController();
        let signal = controller.signal
        dispatch(fetchStatusActions.markFetchingStarted())
        fetch('http://localhost:8080/items' , {signal})
        .then(res => res.json())
        .then((data) => 
            {
                
                dispatch(itemActions.addInitialItems(data.items));
                dispatch(fetchStatusActions.markFetchDone());
                dispatch(fetchStatusActions.markFetchingFinished())
            });
            return() => {
                console.log('cleaning up');
                controller.abort();
            }
        }

            ,[fetchStatus]
        )
    
        return (
            <></>
        )


}

export default FetchingSlice;