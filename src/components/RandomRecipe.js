import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
let API_KEY = process.env.REACT_APP_API_KEY_1;

class RandomRecipe extends Component {

    state ={
        random: []
    }

    onClick = () =>{
        fetch(`https://api.spoonacular.com/recipes/random?number=21&apiKey=${API_KEY}`)
        .then(resp => resp.json())
        .then((resp) => {
            this.setState({
                random: resp.recipes
            })
         })
    }
            
        
    render() {
        // console.log(this.state.random)
        const getRecipes = this.state.random.map(recipe => 
            <RecipeCard key={recipe.id} recipe={recipe}/>)
        return (
            <div className="random">
                <button onClick={this.onClick} className= "get-recipes-btn" >Random Recipe Generator</button>
                <div className="card-container">{getRecipes }</div>
            </div>
        );
    }
}

export default RandomRecipe;