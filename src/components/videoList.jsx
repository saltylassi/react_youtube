import React from "react";
import VideoItem from "./videoItem";

const VideoList = (props) => {
    const { popular } = props;
    // console.log(popular);
    // console.log(typeof popular);
    return (
        <div>
            {popular &&
                popular.map((item) => {
                    return <VideoItem key={item.id} item={item} />;
                })}
        </div>
    );
};

export default VideoList;
