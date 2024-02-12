import React from "react";

const Modal = ({ closeModal }) => {
  const handleModalClick = (e) => {
    // Prevent event propagation to avoid closing the modal when clicking inside it
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    // Close the modal when clicking outside of it
    closeModal();
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal" onClick={handleModalClick}>
        <div className="modal-content">
          <h4>Create New group</h4>
          <div className="input-group">
            <label htmlFor="group-name">Group Name</label>
            <input type="text" placeholder="Enter group name" id="group-name" />
          </div>

          <div className="input-group">
            <label htmlFor="Choose-color">Choose colour</label>
            <div className="choose-color">
              <span id="B38BFA" className="color-box"></span>
              <span id="FF79F2" className="color-box"></span>
              <span id="43E6FC" className="color-box"></span>
              <span id="F19576" className="color-box"></span>
              <span id="0047FF" className="color-box"></span>
              <span id="6691FF" className="color-box"></span>
            </div>
          </div>
          <div className="create-btn">
            <button>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
