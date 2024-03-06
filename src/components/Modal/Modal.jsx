import React, { useState } from "react";

const Modal = ({ closeModal, addGroupToList }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
  };

  const handleInputChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleCreateGroup = () => {
    if (groupName.trim() !== "" && selectedColor !== "") {
      const group = { name: groupName, color: selectedColor };
      addGroupToList(group);
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal" onClick={handleModalClick}>
        <div className="modal-content">
          <h4>Create New group</h4>
          <div className="input-group">
            <label htmlFor="group-name">Group Name</label>
            <input
              type="text"
              placeholder="Enter group name"
              id="group-name"
              value={groupName}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="Choose-color">Choose colour</label>
            <div className="choose-color">
              <span
                className={`color-box ${
                  selectedColor === "B38BFA" ? "selected" : ""
                }`}
                onClick={() => handleColorClick("B38BFA")}
                style={{ background: "#B38BFA" }}
              ></span>
              <span
                className={`color-box ${
                  selectedColor === "FF79F2" ? "selected" : ""
                }`}
                onClick={() => handleColorClick("FF79F2")}
                style={{ background: "#FF79F2" }}
              ></span>
              <span
                className={`color-box ${
                  selectedColor === "43E6FC" ? "selected" : ""
                }`}
                onClick={() => handleColorClick("43E6FC")}
                style={{ background: "#43E6FC" }}
              ></span>
              <span
                className={`color-box ${
                  selectedColor === "F19576" ? "selected" : ""
                }`}
                onClick={() => handleColorClick("F19576")}
                style={{ background: "#F19576" }}
              ></span>
              <span
                className={`color-box ${
                  selectedColor === "0047FF" ? "selected" : ""
                }`}
                onClick={() => handleColorClick("0047FF")}
                style={{ background: "#0047FF" }}
              ></span>
              <span
                className={`color-box ${
                  selectedColor === "6691FF" ? "selected" : ""
                }`}
                onClick={() => handleColorClick("6691FF")}
                style={{ background: "#6691FF" }}
              ></span>
            </div>
          </div>

          <div className="create-btn">
            <button onClick={handleCreateGroup}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
