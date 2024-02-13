import React, { useState, useEffect } from "react";
import "./Notes.css";
import arrowBtnGray from "../../assets/arrow.png";
import arrowBtnBlue from "../../assets/arrow-blue.png";
import Notes from "./Notes";

const NotesList = ({ selectedGroup }) => {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Load notes from local storage based on the selected group
    const storedNotes =
      JSON.parse(localStorage.getItem(`notes_${selectedGroup.name}`)) || [];
    setNotes(storedNotes);
  }, [selectedGroup]);

  const handleInputChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      const updatedNotes = [...notes, { text: newNote, date: new Date() }];
      setNotes(updatedNotes);
      localStorage.setItem(
        `notes_${selectedGroup.name}`,
        JSON.stringify(updatedNotes)
      );
      setNewNote("");
    }
  };

  return (
    <div className="notes-container">
      <div className="notes-header">
        <div
          className="header-name-icon"
          style={{ backgroundColor: `#${selectedGroup.color}` }}
        >
          <h2>{selectedGroup.name.charAt(0)}</h2>
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
        ></textarea>
        <button onClick={handleAddNote}>
          <img src={arrowBtnGray} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default NotesList;
