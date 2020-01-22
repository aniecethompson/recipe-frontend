import React , {Component} from 'react';
import './App.css';
import Login from './components/Login';
import SearchBar from './components/SearchBar';
import RandomRecipe from './components/RandomRecipe';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route} from "react-router-dom";
import FullRecipe from './components/FullRecipe';


class App extends Component {
  

  render() {
    return(
    <Router>
    <div className="App">
      <NavBar />
        <Route path="/" exact component={RandomRecipe}/>
        <Route path="/full-recipe" exact component={FullRecipe}/>
        <Route path="/signup" exact component={Login}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/update_account" exact component={Login}/>
        <Route path="/search"  component={SearchBar}/>
    </div>
    </Router>
  );
}}

export default App;