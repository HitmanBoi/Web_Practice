import styles from "./TodoItem.module.css";
import ToDoItem from "./TodoItem";
function ToDoItems({ todoItems }) {
  return (
    <>
      <div className={styles.items}>
        {todoItems.map((item) => (
          <ToDoItem todoName={item.task} todoDate={item.dueDate}></ToDoItem>
        ))}
      </div>
    </>
  );
}

export default ToDoItems;
