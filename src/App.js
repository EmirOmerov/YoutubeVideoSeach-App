import React from "react";
import "./Components/App.css";
import SearchBar from "./Components/SearchBar.js";
import youtube from "./Api/youtube.js";
import VideoList from "./Components/VideoList.js";
import VideoDetail from "./Components/VideoDetail.js";


class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  // Lifecycle methoda za default home search
  componentDidMount() {
    this.onTermSubmit('');
  }


  // Axios pristup
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        maxResults:25
      }
    });

    // update state
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
     });
  };

  // set state na osnovu selectovanog videa
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        {/* onTermSubmit kao prop za SearchBar */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {/* selected video kao prop za VideoDetail */}
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              {/*  onVideoSelect i state se prosliedjuju na VideoList */}
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;