import React, { useState } from "react";
import PropTypes from "prop-types";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

const CreateArea = props => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expanded, setExpanded] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const handleClick = e => {
    props.onAdd(note);
    e.preventDefault();
    setNote({
      title: "",
      content: ""
    });
    setExpanded(false);
  };

  const handleExpand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {expanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            aria-placeholder="Title"
            type="text"
          />
        )}
        <textarea
          name="content"
          onClick={handleExpand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          aria-placeholder="Take a note..."
          rows={expanded ? 3 : 1}
        />
        <Zoom in={expanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

CreateArea.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default CreateArea;
