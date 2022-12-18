import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
let API_KEY = process.env.REACT_APP_API_KEY_1;

// class RandomRecipe extends Component {

//     state ={
//         random: []
//     }

//     onClick = () =>{
//         // console.log(API_KEY)
//         fetch(`https://api.spoonacular.com/recipes/random?number=21&apiKey=${API_KEY}`)
//         .then(resp => resp.json())
//         .then((resp) => {
//             this.setState({
//                 random: resp.recipes
//             })
//             // console.log(this.state.random)
//          })
//     }
            
        
//     render() {
//         // console.log(this.state.random)
//         const getRecipes = this.state.random.map(recipe => 
//             <RecipeCard key={recipe.id} recipe={recipe}/>)
//         return (
//             <div className="random">
//                 <button onClick={this.onClick} className= "get-recipes-btn" >Random Recipe Generator</button>
//                 <div className="card-container">{getRecipes }</div>
//             </div>
//         );
//     }
// }

function RandomRecipe(){
    
    const [random, setRandom] = useState([])
    
    // const getRecipes = () => {

    //   random.forEach((item) => { 
        
    //     return <RecipeCard key={item.id} recipe={item}/>
    //   })
    // }
  
    const onClick = () =>{
        
        fetch(`https://api.spoonacular.com/recipes/random?number=21&apiKey=${API_KEY}`)
        .then(resp => resp.json())
        .then((resp) => setRandom(resp.recipe)
            // resp.recipes.forEach((recipe) =>{
            //     return <RecipeCard key={recipe.id} recipe={recipe}/>
            )
            
            
            // random.map((item) => { 
            //      return <RecipeCard key={item.id} recipe={item}/>
            //   })
        
    }
   
    
    return (
    <div className="random">
        <button onClick={onClick} className= "get-recipes-btn" >Random Recipe Generator</button>
        <div className="card-container">{random.map((item) => console.log(item))}</div>
        {/* <RecipeCard key={item.id} recipe={item}/> */}
    </div>
    );
}


export default RandomRecipe;