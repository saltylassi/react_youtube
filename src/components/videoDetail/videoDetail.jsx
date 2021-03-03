import React from "react";
import styles from "./videoDetail.module.css";

const VideoDetail = ({
    video: {
        id,
        snippet: { title, channelTitle, description },
    },
}) => {
    return (
        <div className={styles.container}>
            <iframe
                className={styles.video}
                title="videoPlayer"
                id="ytplayer"
                type="text/html"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <div className={styles.videoInfo}>
                <span className={styles.title}>{title}</span>
                <span className={styles.author}>{channelTitle}</span>
                <span className={styles.description}>{description}</span>
            </div>
        </div>
    );
};

export default VideoDetail;
