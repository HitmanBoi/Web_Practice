import bagSlice from "./bagSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import itemsSlice from "./itemSlice"
import { configureStore } from "@reduxjs/toolkit"


const myntraStore = configureStore({
    reducer : {
        items : itemsSlice.reducer,
        fetchStatus : fetchStatusSlice.reducer ,
        bag : bagSlice.reducer
    }
})



export default myntraStore;
