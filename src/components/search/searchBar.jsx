import React from "react";

const searchBar = ({ setInput, search }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="Search Movie"
          onChange={inputHandler}
        ></input>
        <button onClick={search}>Search</button>
      </label>
    </div>
  );
};

export default searchBar;
