import React, { useState, useEffect } from "react";
import GroupName from "../components/GroupName/GroupName";
import Modal from "../components/Modal/Modal";
import NotesList from "../components/Notes/NotesList";
import DefaultScreen from "../components/GroupName/DefaultScreen/DefaultScreen";

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupList, setGroupList] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(""); // Add this line

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
    const updatedGroupList = [...groupList, group];
    setGroupList(updatedGroupList);
    localStorage.setItem("groups", JSON.stringify(updatedGroupList));
  };

  const selectedGroupHandler = (group) => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];

    const selectedGroupName = storedGroups.find((g) => g.name === group.name);

    console.log("Selected Group:", selectedGroupName);

    // Update the selected group state
    setSelectedGroup(selectedGroupName);
  };

  return (
    <div className="wrapper">
      <div className="left">
        <div className="logo">
          <h2>Pocket Notes</h2>
        </div>
        <div className="group-names-wrapper">
          <GroupName groupList={groupList} onClick={selectedGroupHandler} />
          <div className="add-group-icon">
            <button onClick={openModal}>+</button>
          </div>
        </div>

        {isModalOpen && (
          <Modal closeModal={closeModal} addGroupToList={addGroupToList} />
        )}
      </div>

      {selectedGroup ? (
        <NotesList selectedGroup={selectedGroup} />
      ) : (
        <DefaultScreen />
      )}
    </div>
  );
};

export default Homepage;
