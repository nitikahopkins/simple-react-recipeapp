import React from "react";

const IndividualRecipe = ({ recipe }) => {
  return (
    <div>
      <h1>{recipe.food}</h1>
      <img src={recipe.image} alt={recipe.food} width="500" />
      <p>{recipe.instructions}</p>
      <h2>{recipe.id}</h2>
    </div>
  );
};

export default IndividualRecipe;
