import React, { useState } from "react";
import Buffer from "./Buffer";
let API_KEY = process.env.REACT_APP_API_KEY_1;

function RandomRecipe() {
  const [random, setRandom] = useState([]);

  const showRecipes = random.map((recipe) => {
    return <Buffer key={recipe.name} onlineId={recipe.id} recipe={recipe} />;
  });

  const onClick = () => {
    fetch(
      `https://api.spoonacular.com/recipes/random?number=21&apiKey=${API_KEY}`
    )
      .then((resp) => resp.json())
      .then((randomRecipe) => setRandom(randomRecipe.recipes));
  };

  return (
    <div className="random">
      <button onClick={onClick} className="get-recipes-btn">
        Random Recipe Generator
      </button>
      <div className="card-container">{showRecipes}</div>
    </div>
  );
}

export default RandomRecipe;
