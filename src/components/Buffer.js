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
            return <RecipeCard key={recipe.id} recipe={recipe}/>
            })
        return (
            <div>
                {showRecipes}
            </div>
        );
    }
}

export default Buffer;