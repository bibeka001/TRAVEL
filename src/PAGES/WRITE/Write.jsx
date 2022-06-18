import React from "react";
import "./Write.css";
const Write = () => {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://media.istockphoto.com/photos/triangular-modern-lake-house-picture-id1296723838?b=1&k=20&m=1296723838&s=170667a&w=0&h=ypMLh0bMVdTYbeaYwUe6HhLVsxEmtHkz42zlAJWWBsU="
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
