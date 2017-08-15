import React, { Component } from 'react';

const API_KEY = 'AIzaSyB58gvPcc63_fLLBVT9E4SzSTxRjuAsJus';

class SearchBar extends Component {
    render() {
        return (
            <div className="Search-Bar">
                <h1>Search Bar</h1>
                <input type="text" className="form-control" placeholder="Search" />
            </div>
        );
    }
}

export default SearchBar;
