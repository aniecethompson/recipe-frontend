import React, { Component } from 'react';

class RecipeCard extends Component {

    // onClick = () =>{
    //     console.log(this.props.recipe.id);
    //     let recipeId = this.props.recipe.id

    // }
    
    render() {
        return (
              <div onClick={this.onClick} className= "card">
                <img className="center" src={this.props.recipe.image} alt={this.props.recipe.title}/>
                    <div className= "container">
                      <h2>{this.props.recipe.title}</h2>
                      {/* <p style={{textAlign: "center"}}> 💜 {this.props.recipe.likes} </p><br></br> */}
                </div>
            </div>
        );
    }
}
// on click of card div, should bring to Recipe Show page(recipe id)
export default RecipeCard;
