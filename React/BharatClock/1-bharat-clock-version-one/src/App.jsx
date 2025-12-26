import "./App.css";
import AppHead from "./components/AppHead";
import AppMotto from "./components/AppMotto";
import TimeDate from "./components/TimeDate";

function App() {
  return (
    <center className="clock-container">
      <AppHead></AppHead>
      <AppMotto></AppMotto>
      <TimeDate></TimeDate>
    </center>
  );
}

export default App;
