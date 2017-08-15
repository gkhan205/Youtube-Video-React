import React, { Component } from 'react';
import SearchBar from "./components/search_bar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <SearchBar/>
        </div>
      </div>
    );
  }
}

export default App;
