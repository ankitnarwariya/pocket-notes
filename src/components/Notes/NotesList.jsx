import React, { useState, useEffect } from "react";
import "./Notes.css";
import arrowBtnGray from "../../assets/arrow.png";
import arrowBtnBlue from "../../assets/arrow-blue.png";
import Notes from "./Notes";

const NotesList = ({ selectedGroup }) => {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  console.log("selectedGroup:", selectedGroup);

  useEffect(() => {
    if (selectedGroup) {
      const storedNotes =
        JSON.parse(localStorage.getItem(`notes_${selectedGroup.name}`)) || [];
      setNotes(storedNotes);
    }
  }, [selectedGroup ? selectedGroup.name : ""]);

  const handleInputChange = (e) => {
    setNewNote(e.target.value);
    setIsTyping(e.target.value.trim() !== "");
  };

  const handleAddNote = () => {
    if (newNote.trim() !== "" && selectedGroup) {
      const updatedNotes = [...notes, { text: newNote, date: new Date() }];
      setNotes(updatedNotes);
      localStorage.setItem(
        `notes_${selectedGroup.name}`,
        JSON.stringify(updatedNotes)
      );
      setNewNote("");
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddNote();
    }
  };

  return (
    <div className="notes-container">
      <div className="notes-header">
        <div
          className="header-name-icon"
          style={{ backgroundColor: `#${selectedGroup.color}` }}
        >
          <h2>
            {selectedGroup.name.length === 1
              ? selectedGroup.name
              : selectedGroup.name.includes(" ")
              ? `${selectedGroup.name.charAt(0)}${
                  selectedGroup.name.split(" ")[1]?.charAt(0) || ""
                }`
              : selectedGroup.name.charAt(0)}
          </h2>
        </div>
        <div className="header-name-title">
          <h4>{selectedGroup.name}</h4>
        </div>
      </div>
      <div className="notes-wrapper">
        {notes.map((note, index) => (
          <Notes key={index} text={note.text} date={note.date} />
        ))}
      </div>
      <div className="notes-footer">
        <textarea
          name=""
          id=""
          placeholder="Enter your text here..........."
          value={newNote}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        ></textarea>
        <button onClick={handleAddNote}>
          <img src={isTyping ? arrowBtnBlue : arrowBtnGray} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default NotesList;
