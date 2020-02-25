import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

class CookbookRecipe extends Component {

    state = {
        CookbookRecipes: []
    }
    
    
    componentDidMount(){
        fetch(`http://localhost:3001/cookbooks/1`)
        .then(resp => resp.json())
        .then(json_resp => {
            this.setState({
                CookbookRecipes: json_resp.recipes
            })
        })
    }

    removeRecipe = (recipe) => {
        console.log(recipe.id)
        fetch(`http://localhost:3001/recipes/${recipe.id}`, {
          method:'DELETE',
        })
        .then(resp => resp.json())
        .then(json_resp => {
            let allRecipes = [...this.state.CookbookRecipes]
            let newArray = allRecipes.filter(recipeFromArray => {
               return json_resp.id !== recipeFromArray.id
            })
            this.setState({
                CookbookRecipes: newArray
            })
        })
    }


    renderRecipes = () => {
        return this.state.CookbookRecipes.map(recipe =>
            console.log(recipe)
            // fetch(`url`)
            // .then(resp => resp.json())
            // .then(json_resp => console.log(json_resp)) 
            // <RecipeCard key={recipe.id} recipe={recipe}/>    
        )
    }

    render() {
        return (
            <div className="random">
                <h1>CookBook</h1>
                <div className="card-container">
                    {this.renderRecipes()}
                </div>
            </div>
        );
    }
}

export default CookbookRecipe;