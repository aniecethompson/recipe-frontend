import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import {logo} from 'recipe-frontend/src/logo.png';


class NavBar extends Component {
    render() {
        // const source = "recipe/src/logo-trans.png"
        return (
              <nav className="nav-wrapper">
                 <ul className="nav-ul">
                     {/* <li className="push"><img src={source} height="135px;" alt="logo" className= "logo"/></li> */}
                    <li><NavLink className="nav-links" to="/cookbook" exact activeStyle={ {background:"#9171bf"} }>My Cookbook</NavLink></li>
                    <li><NavLink className="nav-links" to="/search" exact activeStyle={ {background:"#9171bf"} } >Search</NavLink></li>
                    <li><NavLink className="nav-links" to="/" exact activeStyle={ {background:"#9171bf"} }>Recipes</NavLink></li>
                  </ul>
            </nav>
        );
    }
}

export default NavBar;