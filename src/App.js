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



// TODO: 1. Remember how app works, 2. add hooks to all files, 3. ensure all functionality you want is working , 4. add unit tests, 5. deploy (ci/cd with github maybe)