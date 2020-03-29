import React from "react";
import "./LeftContainer.css";

const Header = props => {
  return (
    <header className=" App-header">
      <h2 className="header-name"> {props.text}</h2>
    </header>
  );
};

export default Header;
