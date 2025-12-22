import Item from "./Item"
import { useState } from "react"
const FoodItems = ({items}) => {

let [activeItems , setActiveItems] = useState([])
let buyButtonHandler = (i,e) => {
    console.log(i)
    let newItems = [...activeItems,i];
    setActiveItems(newItems);
}
    return(

        <ul className="list-group">
            {items.map((item)=>(
                <Item 
                key={item} 
                foodItem={item}
                handleBuyButton={(event) => buyButtonHandler(item,event)}
                bought={activeItems.includes(item)}
                >

                </Item>
            ))}

        </ul>
    )
}

export default FoodItems;