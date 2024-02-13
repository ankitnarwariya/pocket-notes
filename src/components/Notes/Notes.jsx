import React from "react";

const Notes = ({ text, date }) => {
  return (
    <div className="notes">
      <div className="note">
        <p>{text}</p>
      </div>
      <div className="date-n-time">
        <p>{new Date(date).toLocaleDateString()}</p>
        <p>{new Date(date).toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default Notes;
