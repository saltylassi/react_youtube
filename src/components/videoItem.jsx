import React from "react";

const VideoItem = (props) => {
    const {
        item: {
            snippet: { title },
        },
    } = props;

    return (
        <div>
            <span>{title}</span>
        </div>
    );
};

export default VideoItem;
