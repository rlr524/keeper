import React from "react";
import PropTypes from "prop-types";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Note = props => {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteForeverIcon />
      </button>
    </div>
  );
};

Note.propTypes = {
  onDelete: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number
};

export default Note;
