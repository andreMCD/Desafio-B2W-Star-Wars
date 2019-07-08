import React from "react";

const Recipe = ({ planets, climate, terrain, films }) => {
  return (
    <div>
      <h1>{planets}</h1>
      <p>{climate}</p>
      <p>{terrain}</p>
      <ul>
        {films.map(films => (
          <li>{films}</li>
        ))}
      </ul>
    </div>
  );
};
export default Recipe;
