import React, { useState } from "react";
import "./LeftContainer.css";

const Search = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <div className="left-container">
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>

      {/* added info for left container */}

      <div className="genre">
        <label className="title">Genre</label>
        <ul>
          <li>
            <input type="checkbox" /> Action
          </li>
          <li>
            <input type="checkbox" /> Horror
          </li>
          <li>
            <input type="checkbox" /> Drama
          </li>
          <li>
            <input type="checkbox" /> Documentary
          </li>
          <li>
            <input type="checkbox" /> Foreign
          </li>
          <li>
            <input type="checkbox" /> Kids
          </li>
        </ul>
      </div>
      <div className="ratings">
        <label className="title">Ratings</label>
        <ul>
          <li>
            <input type="checkbox" />
            One star
          </li>
          <li>
            <input type="checkbox" />
            Two star
          </li>
          <li>
            <input type="checkbox" />
            Three star
          </li>
          <li>
            <input type="checkbox" />
            Four star
          </li>
          <li>
            <input type="checkbox" />
            Five star
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
