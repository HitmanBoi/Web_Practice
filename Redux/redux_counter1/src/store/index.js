import { createStore } from 'redux';

const INITIAL_VALUE = {
    counter : 5 ,
    privacy : false ,
}

const counterReducer = (store = INITIAL_VALUE , action)  => {
    console.log(store)
    if (action.type === "INCREMENT") {
        return {...store , counter : store.counter+1 }
    } else if (action.type === "DECREMENT") {
        return {...store ,counter : store.counter-1 }
    } else if (action.type === "ADD") {
        console.log(action.payload);
        return {...store , counter : store.counter+action.payload.num }
    } else if (action.type === "SUB") {
        return {...store ,counter : store.counter-action.payload.num }
    }else if (action.type === "PRIVACY") {
        return {...store,  privacy : !store.privacy}
    }
    return store

}

const counterStore = createStore(counterReducer)


export default counterStore