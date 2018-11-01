import React from "react";

function Search({ selectedQuery, handleChange, submitSearch }) {
  return (
    <form
      className="search_box"
      onSubmit={event => {
        event.preventDefault();
        submitSearch(event, selectedQuery)}}
    >
      <input
        type="search"
        onChange={event => handleChange(event.target.value)}
        value={selectedQuery}
      />
    </form>
  );
}

export default Search;
