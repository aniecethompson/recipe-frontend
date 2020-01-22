import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/Users/flatironbrooklyn/Desktop/Recipe App/recipe/src/logo.png';


class NavBar extends Component {
    render() {
        // const source = "recipe/src/logo-trans.png"
        return (
            <div className="nav-div">
              <nav className="nav-wrapper">
                 <ul className="nav-ul">
                    <img src={logo} height="150px;" alt="logo" className= "logo"/>
                    <li><NavLink className="nav-links" to="/login" exact activeStyle={ {background:"#9171bf"} }>Login</NavLink></li>
                    {/* <li><NavLink className="nav-links" to="/signup" exact activeStyle={ {background:"#AF1B3F"} }>Signup</NavLink></li>
                    <li><NavLink className="nav-links" to="/update_account" exact activeStyle={ {background:"#AF1B3F"} }>Update Account</NavLink></li> */}
                    <li><NavLink className="nav-links" to="/search" exact activeStyle={ {background:"#9171bf"} } >Search</NavLink></li>
                    <li><NavLink className="nav-links" to="/" exact activeStyle={ {background:"#9171bf"} }>Recipes</NavLink></li>
                  </ul>
            </nav>
            </div>
        );
    }
}

export default NavBar;