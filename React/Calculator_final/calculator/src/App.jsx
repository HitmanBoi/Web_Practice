import styles from "./App.module.css";
import { useState } from "react";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  let [expressionn, setExpressionn] = useState("");
  let clickHandler = (btn, event) => {
    if (btn === "C" || (expressionn === "" && btn === "=")) {
      let result = "";
      setExpressionn(result);
      console.log(result);
    } else if (btn === "=") {
      let result = eval(expressionn.toString());
      setExpressionn(result);
      console.log(expressionn, result);
    } else {
      let newExpressionn = [expressionn + btn];
      setExpressionn(newExpressionn);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Calculator</h1>
      <div className={styles.calculator}>
        <Display expressionn={expressionn}> </Display>
        <ButtonsContainer clickHandler={clickHandler}> </ButtonsContainer>
      </div>
    </div>
  );
}

export default App;
