import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
let API_KEY = process.env.REACT_APP_API_KEY_1;


class FullRecipe extends Component {

    state ={
        recipeInfo: {dishTypes: [], cuisines: [], diets: [] ,extendedIngredients: [], analyzedInstructions: [] },
        similarRecipes: []
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

        // fetch(`https://api.spoonacular.com/recipes/${recipeId}/similar?apiKey=${API_KEY}&number=3`)
        // .then(resp => resp.json())
        // .then(recipeArr => {
        //     this.setState({
        //         similarRecipes: recipeArr
        //     })
        // })
    }

    
    render() {
        const getSimilarRecipes = this.state.similarRecipes.map(recipe => 
             <RecipeCard key={recipe.id} recipe={recipe}/>)
        const { title, readyInMinutes, servings, image, dishTypes, cuisines, diets, preparationMinutes, cookingMinutes, extendedIngredients, analyzedInstructions} = this.state.recipeInfo
        console.log(this.state.recipeInfo);
            
        return (
            <div>
                <div className="full-container">
                    <div className="recipe">
                        <img className="recipe-pic" src={image} alt={title}/>
                        <h1>{title}</h1>
                        <p>Prep Time: {preparationMinutes} minutes</p>
                        <p>Cook Time: {cookingMinutes} minutes</p>
                        <p>Ready in {readyInMinutes} minutes</p>
                        <p>Serves {servings} people</p>
                        {/* {console.log(this.state.recipeInfo.dishTypes)} */}
                        <ul>Dish Type: {dishTypes.map((dish, index) => <li key={index} >{dish}</li>)}</ul>
                        <ul>Cuisines: {cuisines.map((cuisine, index) => <li key={index} >{cuisine}</li>)}</ul>
                        <ul>Type of Diet: {diets.map((diet, index) => <li key={index} >{diet}</li>)}</ul>
                        <ul>Ingredients: {extendedIngredients.map((ingredient, index) =>{
                          return  <div className="ingredient-card">
                            {/* <img key={ingredient.id} className="recipe-pic" src={ingredient.image} alt={ingredient.name}/> */}
                            <li key={index} >{ingredient.name}</li>
                            </div>
                        } )}</ul>

                        <ul>Directions: {analyzedInstructions.map((instruction, index) =>{
                          return instruction.steps.map((step) => {
                              return <div className="directions">
                                  {/* <img key={step.id} className="recipe-pic" src={step.image} alt={ingredient.name}/> */}
                                  <li key={index} >Step: {step.number} - {step.step}</li>
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