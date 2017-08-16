import React, { Component } from 'react';

class VideoDetail extends Component {
    render() {  
        const video = this.props.video;      
        if (!video) {
            return <h1>Loading Video...</h1>
        }
        const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div className="col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={videoURL} 
                        title={video.snippet.title}></iframe>
                </div>
                <div className="video-detail">
                    <h3>{video.snippet.title}</h3>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
};

export default VideoDetail;