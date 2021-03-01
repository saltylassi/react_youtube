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
    } = props;

    return (
        <li className={styles.videoContainer}>
            <div className={styles.video}>
                <a
                    className={styles.link}
                    href={`https://youtube.com/watch?v=${id}`}
                >
                    <img
                        className={styles.thumbnail}
                        src={url}
                        width={width}
                        height={height}
                        alt="videoThumbnail"
                    />
                </a>
                <div className={styles.videoInfo}>
                    <span className={styles.videoTitle}>{title}</span>
                    <span className={styles.channelTitle}>{channelTitle}</span>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;
