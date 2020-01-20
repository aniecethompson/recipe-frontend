import React, { Component } from 'react';

class RecipeCard extends Component {
    render() {
        // console.log(this.props.recipe);
        return (
            <div className= "card">
                <img className="center" src={this.props.recipe.image} alt={this.props.recipe.title}/>
                    <div className= "container">
                      <h2>{this.props.recipe.title}</h2>
                      <p style={{textAlign: "center"}}>{this.props.recipe.likes} 💜 </p><br></br>
                </div>
            </div>
        );
    }
}

export default RecipeCard;
