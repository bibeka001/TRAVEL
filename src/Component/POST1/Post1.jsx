import React from "react";
import "./Post1.css";
function Post1() {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1647474006866-ea73947d7795?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
        consequuntur quia optio ipsam tempore. Rem consequatur inventore
        provident culpa facilis, id tempore ea officiis aspernatur magni illum
        accusamus odit sapiente!
      </p>
    </div>
  );
}

export default Post1;
