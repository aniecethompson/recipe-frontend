import React, { useState, useEffect } from "react";
import Buffer from "./Buffer";

function CookbookRecipe() {
  const [cookbookRecipes, setCookbokRecipes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/cookbooks/1`)
      .then((resp) => resp.json())
      .then((recipeInfo) => setCookbokRecipes((arr) => [...arr, recipeInfo]));
    // eslint-disable-next-line
  }, []);

  const renderRecipes = cookbookRecipes.map((recipeInfo) => {
    return <Buffer key={recipeInfo.id} onlineId={recipeInfo.online_id} />;
  });

  return (
    <div className="random">
      <h1>CookBook</h1>
      <div className="card-container">{renderRecipes}</div>
    </div>
  );
}

export default CookbookRecipe;

// TODO: will have to check if it works when you add new backend!!!
// things Cookbook recipe should do: 4. option to add recipe to cookbook, 5. option to remove recipe from cookbook(removeRecipe)
