import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";
import WelcomePage from "./components/WelcomePage";


function App() {
  
  const [selectedTab, setSelected] = useState("Home");



  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelected={setSelected}></Sidebar>
        <div className="content">
          <Header></Header>
          <center>
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          </center>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
