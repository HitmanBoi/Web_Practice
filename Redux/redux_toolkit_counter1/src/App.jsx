import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import Private from "./components/Private";

function App() {
  const privacy = useSelector(store => store.privacy)

  return (
    <>
    <Container>
      <div>
        <div className="px-4 py-5 my-5 text-center">
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacy ? <Private/> : <DisplayCounter/> }
            <Controls></Controls>
          </div>
        </div>
      </div>
      </Container>
    </>
  );
}

export default App;
