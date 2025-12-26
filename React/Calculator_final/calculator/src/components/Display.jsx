import styles from "./Display.module.css";
const Display = ({ expressionn }) => {
  return (
    <>
      <input
        className={styles.display}
        type="text"
        value={expressionn}
        readOnly
      ></input>
    </>
  );
};

export default Display;
