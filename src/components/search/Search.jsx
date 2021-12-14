import React from "react";
import { useGloablContext } from "../../context/context";
import "./search.css";

function Search() {
  const { searchProducts, query, changeQuery } = useGloablContext();
  return (
    <div className="search container">
      <form className="search-form" onSubmit={searchProducts}>
        <input
          type="text"
          className="search-input"
          value={query}
          onChange={(e) => changeQuery(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </form>
    </div>
  );
}

export default Search;
