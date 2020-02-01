import React, { Component } from 'react';

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
        // console.log(recipe.id)
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
            <div className="card">
            <img className="center" src={recipe.image} alt={recipe.title}/>
                <div className= "container">
                  <h2 className="center">{recipe.title}</h2>
                </div>
                <button className="add-btn center" style={ {height: "3em"}} onClick={()=> this.removeRecipe(recipe)}>Remove From Cookbook</button>
            </div>
          
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