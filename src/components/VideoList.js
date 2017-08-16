import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {
    render() {
        const videoItems = this.props.videos.map((video) => {
            return <VideoListItem key={video.etag} video={video} />
        });
        return (
            <div className="col-md-4">
                <ul className="list-group">
                    {videoItems}
                </ul>
            </div>
        );
    }
};

export default VideoList;