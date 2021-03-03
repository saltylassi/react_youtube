import React from "react";
import VideoItem from "../video_item/videoItem";
import styles from "./videoList.module.css";

const VideoList = (props) => {
    const { popular, handleVideoSelect, display } = props;
    const displayType = display === "list" ? styles.list : styles.grid;
    return (
        <ul className={`${styles.videoList} ${displayType}`}>
            {popular &&
                popular.map((item) => {
                    return (
                        <VideoItem
                            key={item.id}
                            item={item}
                            handleVideoSelect={handleVideoSelect}
                        />
                    );
                })}
        </ul>
    );
};

export default VideoList;
