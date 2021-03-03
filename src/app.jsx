import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/videoList";
import axios from "axios";
import "./reset.css";
import SearchHeader from "./components/search_header/searchHeader";
import styles from "./app.module.css";

const api = process.env.REACT_APP_API_KEY;
const URL = `https://www.googleapis.com/youtube/v3`;

const App = ({ youtubeService }) => {
    const [videos, setVideos] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const search = async (query) => {
        // let {
        //     data: { items },
        // } = await axios({
        //     method: "get",
        //     url: `${URL}/search`,
        //     params: {
        //         key: api,
        //         part: "snippet",
        //         maxResults: "25",
        //         q: query,
        //         type: "video",
        //     },
        // });

        // items = items.map((video) => {
        //     return { ...video, id: video.id.videoId };
        // });

        const items = await youtubeService.search(query);

        setVideos(items);
    };

    const getPopularData = async () => {
        // const {
        //     data: { items },
        // } = await axios({
        //     method: "get",
        //     url: `${URL}/videos`,
        //     params: {
        //         key: api,
        //         part: "snippet",
        //         chart: "mostPopular",
        //         maxResults: "25",
        //     },
        // });

        const items = await youtubeService.getPopular();

        setVideos(items);
        setLoaded(true);
    };

    useEffect(() => {
        getPopularData();
    }, []);

    return loaded ? (
        <div className={styles.app}>
            <SearchHeader setVideos={setVideos} search={search} />
            <VideoList popular={videos} />
        </div>
    ) : (
        <div></div>
    );
};

export default App;
