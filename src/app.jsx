import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/videoList";
import axios from "axios";
import "./reset.css";
import SearchHeader from "./components/search_header/searchHeader";
import styles from "./app.module.css";
import VideoDetail from "./components/videoDetail/videoDetail";

const api = process.env.REACT_APP_API_KEY;
const URL = `https://www.googleapis.com/youtube/v3`;

const App = ({ youtubeService }) => {
    const [loaded, setLoaded] = useState(false);
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const search = async (query) => {
        const items = await youtubeService.search(query);
        setSelectedVideo(null);
        setVideos(items);
    };

    const getPopularData = async () => {
        const items = await youtubeService.getPopular();

        setVideos(items);
        setLoaded(true);
    };

    useEffect(() => {
        getPopularData();
    }, []);

    return loaded ? (
        <div className={styles.app}>
            <SearchHeader
                setVideos={setVideos}
                search={search}
                getPopular={getPopularData}
                reset={setSelectedVideo}
            />
            <div className={styles.videoContainer}>
                {selectedVideo && (
                    <div className={styles.videoDetail}>
                        {<VideoDetail video={selectedVideo} />}
                    </div>
                )}
                <div className={styles.videoList}>
                    <VideoList
                        popular={videos}
                        handleVideoSelect={setSelectedVideo}
                        display={selectedVideo ? "list" : "grid"}
                    />
                </div>
            </div>
        </div>
    ) : (
        <div></div>
    );
};

export default App;
