import { createContext } from "react";
import { useReducer, useRef, useState } from "react";

export const todoItemsContext = createContext([])

const todoItemsReducer = (currTodoItems ,action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    const taskValue = action.payload.taskValue
    const dateValue = action.payload.dateValue
      if (taskValue != '' && dateValue != '') {
        newTodoItems = [...currTodoItems , {task : taskValue , dueDate : dateValue}]
        return newTodoItems
       }else{
         console.log('Enter valid values first.')
       } 
  }else if (action.type === "DELETE_ITEM"){
    const taskValue = action.payload.name
    newTodoItems = newTodoItems.filter(i=> i.task!=taskValue)
    return newTodoItems
  }
  return newTodoItems
}


const ToDoItemContextProvider = ( {children} ) => {

      const todoItems =[
    {
    task : 'Buy Milk',
    dueDate : '15/12/2025',
    },
    {
    task : 'Buy Protein',
    dueDate : '20/12/2025',
    },
    {
    task : 'RoadMap Extension',
    dueDate : '25/12/2025'
    }
  ]

  //let [tasks , setTask] = useState(todoItems)

  const [tasks, dispatchTasks] = useReducer(todoItemsReducer , todoItems)



  let addTask = (taskValue,dateValue) => {
    console.log(taskValue,dateValue)
    let newItemAction = {
      type: "NEW_ITEM",
      payload: {
        taskValue,
        dateValue,
      }
    }
    dispatchTasks(newItemAction)
  } 

  let removeTask = (name) => {
    let deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        name,
      }
    }
    dispatchTasks(deleteItemAction)
    //setTask((cval) => cval.filter(i=> i.task!=name))
  }

  return (

    <todoItemsContext.Provider value={{
      tasks,
      addTask,
      removeTask,
      }}>

        {children}

    </todoItemsContext.Provider>

  )


}

export default  ToDoItemContextProvider