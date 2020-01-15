import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <div>
                 <ul>
                    <li><NavLink to="/login" exact activeStyle={ {background:"red"} }>Login</NavLink></li>
                    <li><NavLink to="/search" exact activeStyle={ {background:"red"} } >Search</NavLink></li>
                  </ul>
            </div>
        );
    }
}

export default NavBar;