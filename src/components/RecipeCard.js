import React, { Component } from 'react';
import {withRouter} from "react-router";

class RecipeCard extends Component {
    
    state ={
        userRecipes: []
    }
    onClick = () =>{
        // console.log(this.props);
        
        let recipeId = this.props.recipe.id
        
        this.props.history.push({
            pathname: '/full-recipe',
            state: { recipeId: recipeId }
          })

    }


    componentDidMount(){
        fetch(`http://localhost:3001/recipes`)
        .then(resp => resp.json())
        .then(json_resp => {
            this.setState({
                userRecipes: json_resp
            })
        })
    }

      handleAddRecipeToCookbook = () => {
          let recipe = this.props.recipe
        fetch(`http://localhost:3001/recipes`, {
          method:'POST',
         headers: { 
             'Content-type': 'application/json',
             'accept': 'application/json'
         },
         body: JSON.stringify({
        cookbook_id: 1,
        title: recipe.title,
        image: recipe.image 
          })
        })
        .then(resp => resp.json())
        .then(newR => {
            let recipes = [...this.state.userRecipes, newR]
            this.setState({
                userRecipes: recipes 
            })
            
        })
    }
    
    
    render() {
            return (
                <div className="card">
                <div onClick={this.onClick}>
                <img className="center" src={this.props.recipe.image} alt={this.props.recipe.title}/>
                    <div className= "container">
                      <h2>{this.props.recipe.title}</h2>
                    </div>
                </div>
             <button className="add-btn center" onClick={this.handleAddRecipeToCookbook}>Add To Cookbook</button>
             </div>
        );
    }
}

export default withRouter(RecipeCard);
