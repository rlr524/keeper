import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = note => {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  };

  const deleteNote = id => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={uuidv4()}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
