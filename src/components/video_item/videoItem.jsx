import React from "react";
import styles from "./videoItem.module.css";

const VideoItem = (props) => {
    const {
        item: {
            id,
            snippet: {
                title,
                channelTitle,
                thumbnails: {
                    default: { url, width, height },
                },
            },
        },
        handleVideoSelect,
        item,
    } = props;

    const onSelect = () => {
        handleVideoSelect(item);
    };

    return (
        <li className={styles.videoContainer} onClick={onSelect}>
            <div className={styles.video}>
                <img
                    className={styles.thumbnail}
                    src={url}
                    width={width}
                    height={height}
                    alt="videoThumbnail"
                />
                <div className={styles.videoInfo}>
                    <span className={styles.videoTitle}>{title}</span>
                    <span className={styles.channelTitle}>{channelTitle}</span>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;
