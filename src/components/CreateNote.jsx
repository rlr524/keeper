import React from "react";
import Note from "./Note";

const createNote = note => {
  return (
    <Note
      key={note.id}
      id={note.id}
      title={note.title}
      content={note.content}
    />
  );
};

export default createNote;
