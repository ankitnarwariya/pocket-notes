import React from "react";
import homeBanner from "../../assets/pocket-notes-img.png";
import lockIcon from "../../assets/Vector.png";
import "./Right.css";

const Right = () => {
  return (
    <div className="right">
      <div className="home-wrapper">
        <img src={homeBanner} alt="banner" />
        <h1>Pocket Notes</h1>
        <p>Send and receive messages without keeping your phone online.</p>
        <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>
      <div className="home-bottom">
        <img src={lockIcon} alt="lock-icon" />
        <p>end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default Right;
