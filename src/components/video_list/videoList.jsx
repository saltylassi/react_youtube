import React from "react";
import VideoItem from "../video_item/videoItem";
import styles from "./videoList.module.css";

const VideoList = (props) => {
    const { popular } = props;
    return (
        <ul className={styles.videoList}>
            {popular &&
                popular.map((item) => {
                    return <VideoItem key={item.etag} item={item} />;
                })}
        </ul>
    );
};

export default VideoList;
