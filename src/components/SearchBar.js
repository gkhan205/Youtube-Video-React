import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }
    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }
    render() {
        return (
            <div className="Search-Bar">
                <div className="col-sm-6">
                <input type="text"
                       className="form-control"
                       placeholder="Search"
                       value={this.state.term}
                       onChange={this.onInputChange.bind(this)} />
                       {this.state.term}
                </div>
            </div>
        );
    }
}

export default SearchBar;
