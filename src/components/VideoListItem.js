import React, {Component} from 'react';

class VideoListItem extends Component {
    render() {
        const video = this.props.video;
        return (
            <li className="list-group-item">
                <div className="media">
                    <div className="media-left">
                        <img className="media-object" src={video.snippet.thumbnails.default.url} 
                            alt={video.snippet.title} />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            <p>{video.snippet.title}</p>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
};

export default VideoListItem;