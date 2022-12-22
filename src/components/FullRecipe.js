import React, { useEffect, useState } from "react";
import Buffer from "./Buffer";
import { withRouter } from "react-router";
import { useLocation } from "react-router-dom";

let API_KEY = process.env.REACT_APP_API_KEY_1;

function FullRecipe() {
  const location = useLocation();
  const { recipeId } = location.state;
  const [recipeInfo, setRecipeInfo] = useState({
    dishTypes: [],
    cuisines: [],
    diets: [],
    extendedIngredients: [],
    analyzedInstructions: [],
  });

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
    )
      .then((resp) => resp.json())
      .then((recipe) => setRecipeInfo(recipe));
  }, [recipeId]);

  const {
    title,
    readyInMinutes,
    servings,
    image,
    dishTypes,
    cuisines,
    diets,
    preparationMinutes,
    cookingMinutes,
    extendedIngredients,
    analyzedInstructions,
  } = recipeInfo;
  const [similarRecipes, setSimilarRecipes] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/similar?apiKey=${API_KEY}&number=3`
    )
      .then((resp) => resp.json())
      .then((recipes) => setSimilarRecipes(recipes));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="full-container">
        <div className="recipe">
          <h1 className="full-recipe-title">{title}</h1>
          <img className="recipe-pic" src={image} alt={title} />
          <p className="full-recipe-p">
            Prep Time: {preparationMinutes} minutes
          </p>
          <p className="full-recipe-p" style={{ color: "#AF1B3F" }}>
            Cook Time: {cookingMinutes} minutes
          </p>
          <p className="full-recipe-p">Ready in {readyInMinutes} minutes</p>
          <p className="full-recipe-p" style={{ color: "#AF1B3F" }}>
            Serves {servings} people
          </p>
          <ul className="full-recipe-ul">
            Dish Type:{" "}
            {dishTypes.map((dish, index) => (
              <li className="full-recipe-li" key={index}>
                {dish}
              </li>
            ))}
          </ul>
          <ul className="full-recipe-ul">
            Cuisines:{" "}
            {cuisines.map((cuisine, index) => (
              <li className="full-recipe-li" key={index}>
                {cuisine}
              </li>
            ))}
          </ul>
          <ul className="full-recipe-ul">
            Type of Diet:{" "}
            {diets.map((diet, index) => (
              <li className="full-recipe-li" key={index}>
                {diet}
              </li>
            ))}
          </ul>

          <ul className="full-recipe-ul">
            Ingredients:{" "}
            {extendedIngredients.map((ingredient, index) => {
              return (
                <li className="full-recipe-li" key={index}>
                  {ingredient.name}
                </li>
              );
            })}
          </ul>

          <ul className="full-recipe-ul">
            Directions:{" "}
            {analyzedInstructions.map((instruction, index) => {
              return instruction.steps.map((step) => {
                return (
                  <div className="directions">
                    <li className="full-recipe-li" key={index}>
                      Step: {step.number} - {step.step}
                    </li>
                  </div>
                );
              });
            })}
          </ul>

          <div>
            <button
              className="add-btn center"
              onClick={() => this.handleAddRecipeToCookbook()}
            >
              Add To Cookbook
            </button>
          </div>

          <h1>Similar Recipes</h1>
          <div className="card-container">
            {similarRecipes.map((recipe) => (
              <Buffer key={recipe.id} onlineId={recipe.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(FullRecipe);
// add handleAddRecipeToCookbook function and button
