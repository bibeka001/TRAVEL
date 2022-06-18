import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://i.picsum.photos/id/69/200/300.jpg?hmac=Fi013AQLlcWNitMk_zPUagjtpMSBYGKXEfPstBEXLJA"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
          adipisci architecto modi obcaecati debitis eos impedit, harum
          consequatur quod
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square" ></i>
          <i className="sidebarIcon fab fa-twitter-square" ></i>
          <i className="sidebarIcon fab fa-pinterest-square" ></i>
          <i className="sidebarIcon fab fa-instagram-square" ></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
