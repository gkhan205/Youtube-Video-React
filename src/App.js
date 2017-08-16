import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList'

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB58gvPcc63_fLLBVT9E4SzSTxRjuAsJus';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'bollywood'}, (data) => {
      this.setState({ videos: data });
    });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
            <SearchBar/>
            <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
