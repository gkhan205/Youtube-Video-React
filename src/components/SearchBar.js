import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
    render() {
        return (
            <div className="search-bar">
                <div className="col-sm-8 col-sm-offset-2">
                <input type="text"
                       className="form-control"
                       placeholder="Search Video"
                       value={this.state.term}
                       onChange={event => this.onInputChange(event.target.value)} />
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default SearchBar;
