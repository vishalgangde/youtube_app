import React from 'react';

const VideoDetail = ({ video }) => {

    if(!video){
        return <div>Loading..</div>
    }


    //take the Id's from embed 
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;


    //iframe is used for display the video player
    return(
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={videoSrc}/>
            </div>
            <div className="ui segment">
             <h4>{video.snippet.title}</h4>
             <p>{video.snippet.description}</p>
            </div>
        </div>
    ); 
};

export default VideoDetail;