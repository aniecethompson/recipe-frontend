import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
let API_KEY = process.env.REACT_APP_API_KEY_TWO;

class CookbookRecipe extends Component {

    state = {
        CookbookRecipes: []
    }
    
    
    componentDidMount(){
        fetch(`http://localhost:3001/cookbooks/1`)
        .then(resp => resp.json())
        .then(recipesArray => {
            recipesArray.recipes.map(recipeInfo => {
                // console.log(recipe)
                let onlineId = recipeInfo.online_id
                return fetch(`https://api.spoonacular.com/recipes/${onlineId}/information?apiKey=${API_KEY}`)
                .then(resp => resp.json())
                .then(recipe => {
                    //   const recipe = [recipeInfo.title, recipeInfo.image]
                    //    console.log(recipe)
                        
                    this.setState(prevState => ({
                        CookbookRecipes: [...prevState.CookbookRecipes, recipe]
                    }))
            })
            })
        }
        )
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


    
    render() {
        const renderRecipes = this.state.CookbookRecipes.map(recipe =>{
             return <RecipeCard key={recipe.id} recipe={recipe}/>
                // console.log(this.state)
            })
        return (
            <div className="random">
                <h1>CookBook</h1>
                <div className="card-container">
                    {renderRecipes}
                </div>
            </div>
        );
    }
}

export default CookbookRecipe;