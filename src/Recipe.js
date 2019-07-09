import React from "react";

import { Title, Paragraph } from "./styles";

const Recipe = ({ planets, climate, terrain, films }) => {
  return (
    <div>
      <Title>{planets}</Title>
      <Paragraph>{climate}</Paragraph>
      <Paragraph>{terrain}</Paragraph>
      <Paragraph>{films}</Paragraph>
    </div>
  );
};
export default Recipe;
