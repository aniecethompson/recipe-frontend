import React, { Component } from 'react';


class SearchBar extends Component {
    render() {
        return (
            <div>
                <form>
                    Search By Ingredient: <input type= "text"/>
                </form>
            </div>
        );
    }
}

export default SearchBar;