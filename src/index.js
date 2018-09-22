import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyDntxVE8eiJ-5A7z3WAP_mEgUYOEI97iSU";
//Create a new component. this component should produce some HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos)=> {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}


//take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));