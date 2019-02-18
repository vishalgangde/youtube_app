import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
state = { videos: [], selectVideo: null };


//When Page Load Dispaly Punjabi Songs 
componentDidMount(){
    this.onTermSubmit('Punjabi Songs');
}

onTermSubmit = async term => {
const response = await youtube.get('/search', {
params: {
q: term
}
});
this.setState({ 
    videos: response.data.items,
    selectVideo : response.data.items[0]
 });
};

onVideoSelect = video => {
this.setState({ selectVideo: video });
}


    //show each and every thing (search,videos,and list of videos)
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
              <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectVideo} />
                    </div>

                    <div className="five wide column">
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
};


export default App;