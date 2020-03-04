import React, { Component } from 'react';
import Buffer from './Buffer'

class CookbookRecipe extends Component {

    state = {
        CookbookRecipes: []
    }
    
    
    componentDidMount(){
        fetch(`http://localhost:3001/cookbooks/1`)
        .then(resp => resp.json())
        .then(recipesArray => {
            return recipesArray.recipes.map(recipeInfo => {
                    return this.setState(prevState => ({
                        CookbookRecipes: [...prevState.CookbookRecipes, recipeInfo]
                    }))
            })
        }
        )
    }

    removeRecipe = (recipe) => {
        console.log(recipe.id)
        // fetch(`http://localhost:3001/recipes/${recipe.id}`, {
        //   method:'DELETE',
        // })
        // .then(resp => resp.json())
        // .then(json_resp => {
        //     let allRecipes = [...this.state.CookbookRecipes]
        //     let newArray = allRecipes.filter(recipeFromArray => {
        //        return json_resp.id !== recipeFromArray.id
        //     })
        //     this.setState({
        //         CookbookRecipes: newArray
        //     })
        // })
    }
    
    render() {
        const renderRecipes = this.state.CookbookRecipes.map(recipeInfo =>{
            // console.log(recipeInfo)
            return <Buffer key={recipeInfo.id} onlineId={recipeInfo.online_id} removeRecipe={this.removeRecipe}/>
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