import React, { Component} from 'react';
import RecipeCard from './RecipeCard';
let API_KEY = process.env.REACT_APP_API_KEY_1

class SearchBar extends Component {
    state = {
        searchInput: "",
        data: []
      }

    onChange = (event) => {
        this.setState({
          searchInput: event.target.value
        })
      }

      
    
    onSubmit = (event) => {
        event.preventDefault()
        // event.target.reset() // no! not in react
        // console.log(this.props.newMessage)
        // this.setState({ ...defaultState })
        // console.log(this.state.searchInput)
        // console.log(API_KEY)
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.state.searchInput}&number=12&apiKey=${API_KEY}`)
        .then(resp => resp.json())
        // .then(json_resp => console.log(json_resp))
        .then((resp) => {
            this.setState({
                searchInput: "",
                data: resp
            })
        })
        
    }
        
    render() {
       return (
        <React.Fragment>
              <div className="header">
               <form className= "search-form" onSubmit={this.onSubmit}>
                   <h1>Search By Ingredient</h1> 
                   <div className= "form-box">
                   <input  onChange={this.onChange} value={this.state.searchInput}className= "search-field ingredient" placeholder= "Enter Ingredient ..." name="searchInput" type= "text"/>
                   <input className= "search-btn" type="submit"/>
                   </div>
               </form>
             </div>
             <div className="random">
             <div className="card-container">{this.state.data.map(data => (<RecipeCard key={data.id} recipe={data}/>))}</div>
             </div>
        </React.Fragment>
       )};

       }

export default SearchBar;