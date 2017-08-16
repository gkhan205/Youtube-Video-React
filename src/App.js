import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail';
import Header from './Header';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB58gvPcc63_fLLBVT9E4SzSTxRjuAsJus';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  componentDidMount() {
    this.videoSearch('react js')
  };

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div className="App">
        <div className="container">
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
        </div>
      </div>
    );
  }
}

export default App;
