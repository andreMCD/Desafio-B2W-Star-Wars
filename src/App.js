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

    setRecipes(data.results);
    console.log(data.results);
  };

  //const getPlanet = e => {
  //e.preventDefault();
  //const rand = myArray[Math.floor(Math.random() * myArray.length)];
  //};

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
      {recipes.map(recipe => (
        <Recipe
          key={recipe.name}
          planets={recipe.name}
          climate={recipe.climate}
          terrain={recipe.terrain}
          films={recipe.films}
        />
      ))}
    </div>
  );
};
export default App;
