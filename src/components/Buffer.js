import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
let API_KEY = process.env.REACT_APP_API_KEY_1;

function Buffer(props) {
  console.log("props from buffer", props);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    let onlineId = props.onlineId;
    fetch(
      `https://api.spoonacular.com/recipes/${onlineId}/information?apiKey=${API_KEY}`
    )
      .then((resp) => resp.json())
      .then((recipeInfo) => setRecipes((arr) => [...arr, recipeInfo]));
    // eslint-disable-next-line
  }, []);

  console.log("recipes", recipes);
  const showRecipes = recipes.map((recipe) => {
    return (
      <RecipeCard key={recipe.name} onlineId={recipe.id} recipe={recipe} />
    );
  });

  return <div>{showRecipes}</div>;
}

export default Buffer;
