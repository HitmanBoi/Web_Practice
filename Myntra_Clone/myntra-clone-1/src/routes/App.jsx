import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeItem from "../components/HomeItem";
import FetchingSlice from "../components/FetchingSlice";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector(store => store.fetchStatus)
  return (
    <>
      <Header />
      <FetchingSlice/>
      {fetchStatus.currentlyFetching ? <Loader/> :  <Outlet/>}
      <Footer />
    </>
  );
}

export default App;
