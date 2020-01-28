import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
let API_KEY = process.env.REACT_APP_API_KEY_TWO;


class FullRecipe extends Component {

    state ={
        recipeInfo: {dishTypes: [], cuisines: [], diets: [] ,extendedIngredients: [], analyzedInstructions: [] },
        similarRecipes: [],
        recipes: []
    }

    componentDidMount() {
        let recipeId = this.props.location.state.recipeId 
        fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`)
        .then(resp => resp.json())
        .then(recipe => {
            this.setState({
                recipeInfo: recipe
            })
        })

        fetch(`https://api.spoonacular.com/recipes/${recipeId}/similar?apiKey=${API_KEY}&number=3`)
        .then(resp => resp.json())
        .then(recipeArr => {
            this.setState({
                similarRecipes: recipeArr
            })
        })

    }

    render() {
        const getSimilarRecipes = this.state.similarRecipes.map(recipe => 
             <RecipeCard key={recipe.id} recipe={recipe}/>)
        const { title, readyInMinutes, servings, image, dishTypes, cuisines, diets, preparationMinutes, cookingMinutes, extendedIngredients, analyzedInstructions} = this.state.recipeInfo
       
            
        return (
            <div>
                  <div className="full-container">
                    <div className="recipe">
                        <h1 className= "full-recipe-title">{title}</h1>
                        <img className="recipe-pic" src={image} alt={title}/>
                        <p className="full-recipe-p">Prep Time: {preparationMinutes} minutes</p>
                        <p className="full-recipe-p" style={ {color:"#AF1B3F"} }>Cook Time: {cookingMinutes} minutes</p>
                        <p className="full-recipe-p">Ready in {readyInMinutes} minutes</p>
                        <p className="full-recipe-p" style={ {color:"#AF1B3F"} }>Serves {servings} people</p>
                        {/* {console.log(this.state.recipeInfo.dishTypes)} */}
                        <ul className="full-recipe-ul" >Dish Type: {dishTypes.map((dish, index) => <li className="full-recipe-li" key={index} >{dish}</li>)}</ul>
                        <ul className="full-recipe-ul">Cuisines: {cuisines.map((cuisine, index) => <li className="full-recipe-li" key={index} >{cuisine}</li>)}</ul>
                        <ul className="full-recipe-ul">Type of Diet: {diets.map((diet, index) => <li className="full-recipe-li" key={index} >{diet}</li>)}</ul>
                        <ul className="full-recipe-ul">Ingredients: {extendedIngredients.map((ingredient, index) =>{
                          return  <div className="ingredient-card">
                            {/* <img key={ingredient.id} className="recipe-pic" src={ingredient.image} alt={ingredient.name}/> */}
                            <li className="full-recipe-li" key={index} >{ingredient.name}</li>
                            </div>
                        } )}</ul>

                        <ul className="full-recipe-ul">Directions: {analyzedInstructions.map((instruction, index) =>{
                          return instruction.steps.map((step) => {
                              return <div className="directions">
                                  {/* <img key={step.id} className="recipe-pic" src={step.image} alt={ingredient.name}/> */}
                                  <li className="full-recipe-li" key={index} >Step: {step.number} - {step.step}</li>
                                  </div>
                          })
                          
                        } )}</ul>

                    </div>
                    <ol>
                    {getSimilarRecipes}
                    </ol>
                </div> 
            </div>
        );
    }
}

export default FullRecipe;