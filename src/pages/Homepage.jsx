import React from "react";
import Left from "../components/Left/Left";
import Right from "../components/Right/Right";
import Notes from "../components/Notes/Notes";

const Homepage = () => {
  return (
    <div className="wrapper">
      <Left />
      {/* <Right /> */}
      <Notes />
    </div>
  );
};

export default Homepage;
