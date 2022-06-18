import React from "react";
import Sidebar from "../../Component/SIDEBAR/Sidebar";
import SinglePost from "../../Component/SinglePost/SinglePost";
import "./Single.css";
const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
