import React, { useState } from "react";
import deleteIcon from "../../assets/trash-bin.png";

const GroupName = ({ groupList, onClick, onDelete }) => {
  const [activeGroup, setActiveGroup] = useState(null);

  const handleGroupClick = (group) => {
    if (onClick) {
      onClick(group);
      setActiveGroup(group.name);
    }
  };

  const handleDelete = (group) => {
    if (onDelete) {
      onDelete(group);
    }
  };

  return (
    <div className={`group-names ${activeGroup ? "active" : ""}`}>
      {groupList.map((group, index) => (
        <div
          key={index}
          className={`group-name-box ${
            activeGroup === group.name ? "active" : ""
          }`}
          onClick={() => handleGroupClick(group)}
        >
          <div className="group-name">
            <div
              className="group-name-icon"
              style={{ backgroundColor: `#${group.color}` }}
            >
              <h2>
                {group.name.length === 1
                  ? group.name
                  : group.name.includes(" ")
                  ? `${group.name.charAt(0)}${group.name
                      .split(" ")[1]
                      ?.charAt(0)}`
                  : group.name.charAt(0)}
              </h2>
            </div>
            <div className="group-name-title">
              <h4>{group.name}</h4>
            </div>
          </div>

          <div
            className="group-name-delete-icon"
            onClick={() => handleDelete(group)}
          >
            <img src={deleteIcon} alt="delete-icon" className="delete-icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupName;
