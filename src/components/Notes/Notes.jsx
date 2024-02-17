import React from "react";

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
