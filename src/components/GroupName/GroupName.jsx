import React from "react";

const GroupName = ({ groupList }) => {
  return (
    <div className="group-names">
      {groupList.map((group, index) => (
        <div key={index} className="group-name">
          <div
            className="group-name-icon"
            style={{ backgroundColor: `#${group.color}` }}
          >
            <h2>{group.name.charAt(0)}</h2>
          </div>
          <div className="group-name-title">
            <h4>{group.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupName;
