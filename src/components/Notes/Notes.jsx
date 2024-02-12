import React from "react";
import "./Notes.css";
import arrowBtnGray from "../../assets/arrow.png";
import arrowBtnBlue from "../../assets/arrow-blue.png";
import Note from "./Note";

const Notes = () => {
  return (
    <div className="notes-container">
      <div className="notes-header">
        <div className="header-name-icon">
          <h2>As</h2>
        </div>
        <div className="header-name-title">
          <h4>Ankit Singh</h4>
        </div>
      </div>
      <div className="notes-wrapper">
        <Note />
      </div>
      <div className="notes-footer">
        {/* <input type="textbox" placeholder="Enter your text here..........." /> */}
        <textarea
          name=""
          id=""
          placeholder="Enter your text here..........."
        ></textarea>
        <button>
          <img src={arrowBtnGray} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Notes;
