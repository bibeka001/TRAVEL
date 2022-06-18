import React from "react";
import "./SinglePost.css";
const SinglePost = () => {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1555057918-78809fd6a368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            {/* <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-regular fa-trash-can"></i> */}

            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
          nesciunt ducimus tempore architecto quidem illo corrupti earum?
          Tempora perspiciatis totam dolore voluptatem, quis quo voluptas,
          dolores optio corrupti est neque. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Saepe, nesciunt ducimus tempore
          architecto quidem illo corrupti earum? Tempora perspiciatis totam
          dolore voluptatem, quis quo voluptas, dolores optio corrupti est
          neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
          nesciunt ducimus tempore architecto quidem illo corrupti earum?
          Tempora perspiciatis totam dolore voluptatem, quis quo voluptas,
          dolores optio corrupti est neque.Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Saepe, nesciunt ducimus tempore
          architecto quidem illo corrupti earum? Tempora perspiciatis totam
          dolore voluptatem, quis quo voluptas, dolores optio corrupti est
          neque.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
