import React from "react";
import recipesdb from "../../recipesdb";
import RecipeItem from "./RecipeItem";
import "../../CSS/RecipeList.css";

//state will come handy if we want to update database and add more recipes
const RecipeList = () => {
  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   setRecipes(recipesdb);
  // }, []);

  return (
    <div className="RecipeList">
      {recipesdb.map((recipe, key) => (
        <RecipeItem recipe={recipe} key={key} />
      ))}
    </div>
  );
};

export default RecipeList;
