import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
let API_KEY = process.env.REACT_APP_API_KEY_1;

class Buffer extends Component {

    state ={
        recipes:[]
    }

    componentDidMount(){
        let onlineId = this.props.onlineId
        fetch(`https://api.spoonacular.com/recipes/${onlineId}/information?apiKey=${API_KEY}`)
        .then(resp => resp.json())
        .then(recipeInfo => {
                return this.setState(prevState => ({
                    recipes: [...prevState.recipes, recipeInfo]
                }))

         })
    }


    render() {
        const showRecipes = this.state.recipes.map(recipe =>{
            // return console.log(recipe.id)
            return <RecipeCard key={recipe.name} onlineId={recipe.id} recipe={recipe} removeRecipe={this.props.removeRecipe}/>
            })
        return (
            <div>
                {showRecipes}
            </div>
        );
    }
}

export default Buffer;