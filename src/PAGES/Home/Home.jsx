import React from "react";
import "./Home.css";
import Header from "../../Component/HEADER/Header";
import Posts from "../../Component/POSTS/Posts";
import Sidebar from "../../Component/SIDEBAR/Sidebar";
function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
