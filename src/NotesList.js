import React from "react";
import Note from "./Note";

var NoteList = props => {
  var matchedNotes = props.notes.filter(note => note.doesMatchSearch);

  var renderNoteList = matchedNotes.map(note => (
    <Note note={note} key={note.id} onType={props.onType} />
  ));
  return <ul className="notes-list">{renderNoteList}</ul>;
};

export default NoteList;
