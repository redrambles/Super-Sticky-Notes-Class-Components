import React, { Component } from "react";

class Note extends Component {
  updateTitle = e => {
    var updatedValue = e.target.value;
    var editMeId = this.props.note.id;
    this.props.onType(editMeId, "title", updatedValue);
  };

  updateDescription = e => {
    var updatedValue = e.target.value;
    var editMeId = this.props.note.id;
    this.props.onType(editMeId, "description", updatedValue);
  };

  render() {
    return (
      <li className="note">
        <input
          className="note__title"
          type="text"
          placeholder="Title"
          value={this.props.note.title}
          onChange={this.updateTitle}
        />
        <textarea
          className="note__description"
          placeholder="Description..."
          value={this.props.note.description}
          onChange={this.updateDescription}
        />
        <span className="note__delete" onClick={() => this.props.onDelete(this.props.note.id)}>X</span>
      </li>
    );
  }
}

export default Note;
