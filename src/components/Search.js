import React from "react";

function Search({ query, handleChange, submitQuery }) {

  return (
    <form className="search_box" onSubmit={submitQuery}>
      <input type="search" onChange={handleChange} />
    </form>
  );

}

export default Search;
