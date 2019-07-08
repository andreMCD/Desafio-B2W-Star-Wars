import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getApi();
  }, [query]);

  //CONECTANDO A API
  const getApi = async () => {
    const response = await fetch(`https://swapi.co/api/${query}/`);
    const data = await response.json();

    setRecipes(data.results[Math.floor(Math.random() * data.results.length)]);
    setQuery("");
  };

  const updateSearch = e => {
    e.preventDefault();
    setQuery("planets");
  };
  return (
    <div className="app">
      <h1 className="title">Star Wars!</h1>
      <button className="btn-submit" type="submit" onClick={updateSearch}>
        Sortear
      </button>

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
