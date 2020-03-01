import React, { Component } from 'react';
import {withRouter} from "react-router";

class RecipeCard extends Component {
    
    onClick = () =>{
        let recipeId = this.props.recipe.id
        
        this.props.history.push({
            pathname: '/full-recipe',
            state: { recipeId: recipeId }
          })

    }


    // componentDidMount(){
    //     fetch(`http://localhost:3001/recipes`)
    //     .then(resp => resp.json())
    //     .then(json_resp => {
    //         this.setState({
    //             userRecipes: json_resp
    //         })
    //     })
    // }

    //   handleAddRecipeToCookbook = () => {
    //       let recipe = this.props.recipe
    //     fetch(`http://localhost:3001/recipes`, {
    //       method:'POST',
    //      headers: { 
    //          'Content-type': 'application/json',
    //          'accept': 'application/json'
    //      },
    //      body: JSON.stringify({
    //     cookbook_id: 1,
    //     title: recipe.title,
    //     image: recipe.image 
    //       })
    //     })
    //     .then(resp => resp.json())
    //     .then(newR => {
    //         let recipes = [...this.state.userRecipes, newR]
    //         this.setState({
    //             userRecipes: recipes 
    //         })
            
    //     })
    // }
    
    
    render() {
        const {image, title} = this.props.recipe
            return (
                <div className="card">
                    <div >
                        <img className="center" src={image} alt={title}/>
                        <div className= "container">
                            <h2>{title}</h2>
                        </div>
                    </div>
                    <button className="add-btn center" onClick={this.onClick}>View Recipe</button>
                </div>
        );
    }
}

export default withRouter(RecipeCard);
