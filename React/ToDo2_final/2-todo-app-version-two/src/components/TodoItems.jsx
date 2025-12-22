import styles from "./TodoItem.module.css"
import ToDoItem from "./TodoItem";
import DeletedItem from "./DeletedItem";
import { useRef, useState } from "react";
function ToDoItems({todoItems , removeHandler }) {
  let [deletedItems , setDeleted] = useState([])

  let reff = useRef()

  let onDeleteHandelor = (event,itemm,date) => {
    //console.log('click',event,itemm,date)
     let dels = todoItems.filter(i => i.task === itemm)
     console.log(dels[0])
     let delIndex = todoItems.indexOf(dels[0])
     todoItems[delIndex].isDeleted = true
     setDeleted([...deletedItems,todoItems[delIndex]])
  }

    return (
      <>
      <div className={styles.items}>
        {todoItems.map (item => item.isDeleted===true ? 
        <DeletedItem 
        key={item.task}
        todoName={item.task} 
        todoDate={item.dueDate}
        removeHandler={removeHandler} >
        </DeletedItem>  :
         <ToDoItem 
        key={item.task}
        todoName={item.task} 
        todoDate={item.dueDate}
        deleteHandler={onDeleteHandelor}>
        </ToDoItem>
         )} 
      </div>
      </>
    );
}

export default ToDoItems;