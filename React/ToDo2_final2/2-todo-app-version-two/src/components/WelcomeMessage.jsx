import { useContext } from "react";
import { todoItemsContext } from "../store/todoItemsStore";
let WelcomeMessage = ({dis}) => {
    //const {dis} = useContext(todoItemsContext)
    console.log('dis is',dis)
    return (      
        <>
        {dis.length === 0 && <p>Enjoy Buddy</p>}
        </>
    )
}

export default WelcomeMessage;