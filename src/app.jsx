import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/videoList";
import axios from "axios";
import "./reset.css";

const api = process.env.REACT_APP_API_KEY;
const URL = `https://www.googleapis.com/youtube/v3`;

const App = () => {
    const [popular, setPopular] = useState([]);
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

        setPopular(items);
        setLoaded(true);
    };

    useEffect(() => {
        getPopularData();
    }, []);

    return loaded ? (
        <div>
            <VideoList popular={popular} />
        </div>
    ) : (
        <div></div>
    );
};

export default App;
