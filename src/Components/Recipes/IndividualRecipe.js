import React from "react";
import AudioPlayer from "./AudioPlayer";

const IndividualRecipe = ({ recipe }) => {
  const hasAudio = recipe.audio ? <AudioPlayer song={recipe.audio} /> : "";
  return (
    <div className="individual-recipe">
      <h1>{recipe.food}</h1>
      {hasAudio}
      <img src={recipe.image} alt={recipe.food} width="500" />
      <p>{recipe.instructions}</p>
      <h2>{recipe.id}</h2>
    </div>
  );
};

export default IndividualRecipe;
