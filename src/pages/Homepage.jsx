import React, { useState, useEffect } from "react";
import GroupName from "../components/GroupName/GroupName";
import Modal from "../components/Modal/Modal";
import NotesList from "../components/Notes/NotesList";
import DefaultScreen from "../components/DefaultScreen/DefaultScreen";
import deleteIcon from "../assets/trash-bin.png";

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupList, setGroupList] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Load group list from local storage on component mount
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroupList(storedGroups);
    setDataLoaded(true);
  }, []);

  useEffect(() => {
    // Update local storage whenever groupList changes (e.g., group is deleted)
    if (dataLoaded) {
      localStorage.setItem("groups", JSON.stringify(groupList));
    }
  }, [groupList, dataLoaded]);

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
    setSelectedGroup(group);
  };

  const deleteGroupHandler = (groupToDelete) => {
    const updatedGroupList = groupList.filter(
      (group) => group !== groupToDelete
    );
    setGroupList(updatedGroupList);

    // Reset selected group if the deleted group is the currently selected one
    if (selectedGroup === groupToDelete) {
      setSelectedGroup(null);
    }
  };

  if (!dataLoaded) {
    return <div>Loading...</div>; // You can replace this with a loading indicator
  }

  return (
    <div className="wrapper">
      <div className="left">
        <div className="logo">
          <h2>Pocket Notes</h2>
        </div>
        <div className="group-names-wrapper">
          <GroupName
            groupList={groupList}
            onClick={selectedGroupHandler}
            onDelete={deleteGroupHandler}
          />
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
