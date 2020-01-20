import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {
    render() {
        const source = "recipe/src/logo-trans.png"
        return (
            <div className="nav-div">
              <nav className="nav-wrapper">
                  <img src={source} alt="fuck me"/>
                 <ul className="nav-ul">
                    <li><NavLink className="nav-links" to="/login" exact activeStyle={ {background:"#AF1B3F"} }>Login</NavLink></li>
                    <li><NavLink className="nav-links" to="/signup" exact activeStyle={ {background:"#AF1B3F"} }>Signup</NavLink></li>
                    <li><NavLink className="nav-links" to="/update_account" exact activeStyle={ {background:"#AF1B3F"} }>Update Account</NavLink></li>
                    <li><NavLink className="nav-links" to="/search" exact activeStyle={ {background:"#AF1B3F"} } >Search</NavLink></li>
                  </ul>
            </nav>
            </div>
        );
    }
}

export default NavBar;