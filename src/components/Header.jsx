import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

const Header = () => {
  return (
    <header>
      <h1>
        <HighlightIcon className="header-icon" fontSize="large" />
        <span>Keeper</span>
      </h1>
    </header>
  );
};

export default Header;
