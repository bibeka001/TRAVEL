import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";
const TopBar = () => {
  const user = true;
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-pinterest-square"></i>
          <i class="fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/Sidebar">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/singlepost">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem">{user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <img className="topImg" src="kat.jpg" alt="" />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </>
  );
};

export default TopBar;
