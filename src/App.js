import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getApi();
  }, [query]);

  //CONECTANDO A API
  const getApi = async () => {
    const response = await fetch(`https://swapi.co/api/${query}/`);
    const data = await response.json();

    setRecipes(data.results[Math.floor(Math.random() * data.results.length)]);
    console.log(data.results);
    console.log(data.results[Math.floor(Math.random() * data.results.length)]);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="app">
      <h1 className="title">Star Wars!</h1>
      <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch} />
        <button className="btn-submit" type="submit">
          Sortear
        </button>
      </form>

      <Recipe
        key={recipes.name}
        planets={recipes.name}
        climate={recipes.climate}
        terrain={recipes.terrain}
        films={recipes.films}
      />
    </div>
  );
};
export default App;
