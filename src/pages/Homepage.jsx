import React, { useState, useEffect } from "react";
import GroupName from "../components/GroupName/GroupName";
import Modal from "../components/Modal/Modal";
import homeBanner from "../assets/pocket-notes-img.png";
import lockIcon from "../assets/Vector.png";
import NotesList from "../components/Notes/NotesList";

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    // Load group list from local storage on component mount
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroupList(storedGroups);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addGroupToList = (group) => {
    // Add a new group to the list and update local storage
    const updatedGroupList = [...groupList, group];
    setGroupList(updatedGroupList);
    localStorage.setItem("groups", JSON.stringify(updatedGroupList));
  };

  return (
    <div className="wrapper">
      <div className="left">
        <div className="logo">
          <h2>Pocket Notes</h2>
        </div>
        <div className="group-names-wrapper">
          <GroupName groupList={groupList} />
          <div className="add-group-icon">
            <button onClick={openModal}>+</button>
          </div>
        </div>

        {isModalOpen && (
          <Modal closeModal={closeModal} addGroupToList={addGroupToList} />
        )}
      </div>

      <div className="right">
        <div className="home-wrapper">
          <img src={homeBanner} alt="banner" />
          <h1>Pocket Notes</h1>
          <p>Send and receive messages without keeping your phone online.</p>
          <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className="home-bottom">
          <img src={lockIcon} alt="lock-icon" />
          <p>end-to-end encrypted</p>
        </div>
      </div>
      {/* <NotesList /> */}
    </div>
  );
};

export default Homepage;
