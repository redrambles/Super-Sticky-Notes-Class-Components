import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };

  addNote = () => {
    let note = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    var newNotes = [note, ...this.state.notes];
    this.setState({ notes: newNotes });
  };

  onType = (editedNoteid, editedField, value) => {
    var updatedNotes = this.state.notes.map(note => {
      if (note.id !== editedNoteid) {
        return note;
      } else {
        if (editedField === "title") {
          return {
            ...note,
            title: value
          };
        } else {
          return {
            ...note,
            description: value
          };
        }
      }
    });
    this.setState({ notes: updatedNotes });
  };

  onSearch = search => {
    // Grab what was entered in search input field
    var searchString = search.target.value.toLowerCase();
    // Create our new notes according to what was searched
    var updatedNotes = this.state.notes.map(note => {
      if (!searchString) {
        // If there's nothing in the search input, return everything
        return {
          ...note,
            doesMatchSearch: true
          };
      } else {
        if (
          note.title.toLowerCase().includes(searchString) ||
          note.description.toLowerCase().includes(searchString)
        ) {
          return {
            ...note,
            doesMatchSearch: true
          };
        } else {
          return {
            ...note,
            doesMatchSearch: false
          };
        }
      }
    });
    this.setState({
      notes: updatedNotes,
      searchText: searchString
    });
  };

  render() {
    return (
      <div>
        <Header
          onSearch={this.onSearch}
          searchText={this.state.searchText}
          addNote={this.addNote}
        />
        <NotesList notes={this.state.notes} onType={this.onType} />
      </div>
    );
  }
}

export default App;
