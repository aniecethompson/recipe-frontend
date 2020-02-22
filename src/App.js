import React , {Component} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import RandomRecipe from './components/RandomRecipe';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route} from "react-router-dom";
import FullRecipe from './components/FullRecipe';
import CookbookRecipe from './components/CookbookRecipe';

class App extends Component {
  
  render() {
    return(
    <Router>
    <div className="App">
      <NavBar />
        <Route path="/" exact component={RandomRecipe}/>
        <Route path="/full-recipe" exact component={FullRecipe}/>
        <Route path="/cookbook" exact component={CookbookRecipe}/>
        <Route path="/search"  component={SearchBar}/>
    </div>
    </Router>
  );
}}

export default App;