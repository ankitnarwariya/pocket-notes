import React from "react";
import deleteIcon from "../../assets/trash-bin.png";

const Notes = ({ text, date }) => {
  const optionsDate = { day: "numeric", month: "long", year: "numeric" };
  const optionsTime = { hour: "2-digit", minute: "2-digit" };

  const formattedDate = new Intl.DateTimeFormat(undefined, optionsDate).format(
    new Date(date)
  );
  const formattedTime = new Date(date).toLocaleTimeString(
    undefined,
    optionsTime
  );

  return (
    <div className="notes">
      <div
        className="notes-delete-icon"
        // onClick={() => handleDelete(group)}
      >
        <img src={deleteIcon} alt="delete-icon" className="delete-icon" />
      </div>
      <div className="note">
        <p>{text}</p>
      </div>
      <div className="date-n-time">
        <p>{formattedDate}</p>
        <p>{formattedTime}</p>
      </div>
    </div>
  );
};

export default Notes;
