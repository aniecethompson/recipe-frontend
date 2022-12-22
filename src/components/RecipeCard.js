import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  console.log("props from recipe card", props);
  const { image, title, id } = props.recipe;

  return (
    <div className="card">
      <div>
        <img className="center" src={image} alt={title} />
        <div className="container">
          <h2>{title}</h2>
        </div>
      </div>
      <Link
        className="add-btn center"
        to={{
          pathname: "/full-recipe",
          state: {
            recipeId: id,
          },
        }}
      >
        View Recipe
      </Link>
    </div>
  );
}

export default withRouter(RecipeCard);
// change link to button component, pass info to determine which button to show
// add showButtons function to determine if button can View or delete recipe(delete should only show when in cookbook)
