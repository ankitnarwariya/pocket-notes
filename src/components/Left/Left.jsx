import React, { useState } from "react";
import "./left.css";
import GroupName from "../GroupName/GroupName";
import Modal from "../Modal/Modal";

const Left = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="left">
      <div className="logo">
        <h2>Pocket Notes</h2>
      </div>
      <div className="group-names-wrapper">
        <GroupName />
        <div className="add-group-icon">
          <button onClick={openModal}>+</button>
        </div>
      </div>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Left;
