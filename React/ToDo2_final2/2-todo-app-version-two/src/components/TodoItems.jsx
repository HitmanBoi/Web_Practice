import styles from "./TodoItem.module.css"
import ToDoItem from "./TodoItem";
import DeletedItem from "./DeletedItem";
import { useContext, useState } from "react";
import { todoItemsContext } from "../store/todoItemsStore";
import WelcomeMessage from "./WelcomeMessage";
function ToDoItems() {

  const {tasks,removeTask} = useContext(todoItemsContext);
  const todoItems = tasks

  
  

  let [deletedItems , setDeleted] = useState([])


  let onDeleteHandelor = (event,itemm,date) => {

    //console.log('click',event,itemm,date)
     let delIndex = todoItems.findIndex(i => i.task === itemm)
     setDeleted((cval) => [...cval ,{...todoItems[delIndex] , isDeleted:true}])
     console.log("deleted items" ,deletedItems)
     removeTask(itemm)
     console.log('original array :', todoItems)
  }

  const displayyItems = [...todoItems,...deletedItems]

  let deleteTask = (name) => {
    setDeleted((cval) => cval.filter(i=> i.task!=name))
  }



    return (
      <>
      <WelcomeMessage dis = {displayyItems}></WelcomeMessage>
      <div className={styles.items}>
        {displayyItems.map (item => 
        <todoItemsContext.Provider
        key={item.task}
        value={{
          todoName:item.task ,
          todoDate:item.dueDate,
          deleteHandler:onDeleteHandelor,
          removeTask:deleteTask,
        }}>
        {item.isDeleted===true ?
        <DeletedItem />
        :
         <ToDoItem />
        }

        </todoItemsContext.Provider>
         )} 
      </div>
      </>
    );
}

export default ToDoItems;