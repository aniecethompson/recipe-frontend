import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
let API_KEY = process.env.REACT_APP_API_KEY_TWO;


class FullRecipe extends Component {

    state ={
        recipeInfo: [],
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

    // displayDishType = dishType => {
    //     return (<li key={ dishType.id } >
    //       { dishType}
    //     </li>)
    //   }

    
    render() {
        const getSimilarRecipes = this.state.similarRecipes.map(recipe => 
             <RecipeCard key={recipe.id} recipe={recipe}/>)
        const { title, readyInMinutes, servings, image,} = this.state.recipeInfo
        // console.log(this.state.recipeInfo);
    
        return (
            <div>
                <div className="full-container">
                    <div className="recipe">
                        <img className="recipe-pic" src={image} alt={title}/>
                        <h1>{title}</h1>
                        <p>Ready in {readyInMinutes} minutes</p>
                        <p>Serves {servings} people</p>
                        {/* {dishType.map(dishType => <li>{dishType}</li>)} */}
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