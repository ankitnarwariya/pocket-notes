import React, { useState } from "react";

const GroupName = ({ groupList, onClick }) => {
  const [activeGroup, setActiveGroup] = useState(null);

  const handleGroupClick = (group) => {
    if (onClick) {
      onClick(group);
      setActiveGroup(group.name);
    }
  };

  return (
    <div className={`group-names ${activeGroup ? "active" : ""}`}>
      {groupList.map((group, index) => (
        <div
          key={index}
          className={`group-name ${activeGroup === group.name ? "active" : ""}`}
          onClick={() => handleGroupClick(group)}
        >
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
