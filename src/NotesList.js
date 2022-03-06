import React from "react";
import Note from "./Note";

var NoteList = ({notes, onType, onDelete}) => {
  var matchedNotes = notes.filter(note => note.doesMatchSearch);

  var renderNoteList = matchedNotes.map(note => (
    <Note note={note} key={note.id} onType={onType} onDelete={onDelete} />
  ));
  return <ul className="notes-list">{renderNoteList}</ul>;
};

export default NoteList;
