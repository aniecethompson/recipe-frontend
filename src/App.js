import React , {Component} from 'react';
import './App.css';
import Login from './components/Login';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route} from "react-router-dom";
require('dotenv').config();

class App extends Component {

  render() {
    return(
    <Router>
    <div className="App">
      <NavBar />
        <Route path="/login" exact component={Login}/>
        <Route path="/search"  component={SearchBar}/>
    </div>
    </Router>
  );
}}

export default App;
