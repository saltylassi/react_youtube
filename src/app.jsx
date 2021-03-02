import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/videoList";
import axios from "axios";
import "./reset.css";
import SearchHeader from "./components/search_header/searchHeader";

const api = process.env.REACT_APP_API_KEY;
const URL = `https://www.googleapis.com/youtube/v3`;

const App = () => {
    const [videos, setVideos] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getPopularData = async () => {
        const {
            data: { items },
        } = await axios({
            method: "get",
            url: `${URL}/videos`,
            params: {
                key: api,
                part: "snippet",
                chart: "mostPopular",
                maxResults: "25",
            },
        });

        setVideos(items);
        setLoaded(true);
    };

    useEffect(() => {
        getPopularData();
    }, []);

    return loaded ? (
        <>
            <SearchHeader setVideos={setVideos} />
            <div>
                <VideoList popular={videos} />
            </div>
        </>
    ) : (
        <div></div>
    );
};

export default App;
