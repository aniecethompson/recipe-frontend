import React, { Component } from 'react';
import {withRouter} from "react-router"

class RecipeCard extends Component {
    
    onClick = () =>{
        // console.log(this.props);
        
        let recipeId = this.props.recipe.id
        
        this.props.history.push({
            pathname: '/full-recipe',
            state: { recipeId: recipeId }
          })

    }

        render() {
            // console.log(this.props.recipe.image)
            return (
                <div onClick={this.onClick} className= "card">
                <img className="center" src={this.props.recipe.image} alt={this.props.recipe.title}/>
                    <div className= "container">
                      <h2>{this.props.recipe.title}</h2>
                </div>
            </div>
        );
    }
}

export default withRouter(RecipeCard);
