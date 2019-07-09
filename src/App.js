import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

import "./App.css";

//importando os componentes de estilos
import { Container } from "./styles";

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
    <Container>
      <h1>Star Wars!</h1>

      <button type="submit" onClick={updateSearch}>
        Sortear
      </button>

      <Recipe
        key={recipes.name}
        planets={recipes.name}
        climate={recipes.climate}
        terrain={recipes.terrain}
        films={recipes.films}
      />
    </Container>
  );
};
export default App;
