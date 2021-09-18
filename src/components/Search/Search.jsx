// src/components/Search.js
// Main search component

import React, { useState } from "react";
import Scroll from "../Scroll/Scroll";
import SearchList from "../SearchList/SearchList";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filtereReto = details.filter((reto) => {
    return reto.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filtereReto={filtereReto} />
      </Scroll>
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Busca un reto</h2>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
