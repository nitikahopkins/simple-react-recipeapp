import React, { useState, useEffect } from "react";
import recipesdb from "../../recipesdb";
import IndividualRecipe from "../../Components/Recipes/IndividualRecipe";
import NotFound from "../../Pages/NotFound";
import slugify from "slugify";

const Recipe = ({ slug }) => {
  // return <div>Recipe {props.recipeId}</div>;
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    setRecipe(
      recipesdb.find(({ food }) => slugify(food, { lower: true }) === slug)
    );
  }, []);
  if (!recipe) {
    return <NotFound />;
  }
  return <IndividualRecipe recipe={recipe} />;
};

export default Recipe;
