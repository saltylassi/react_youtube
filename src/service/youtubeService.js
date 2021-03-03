import axios from "axios";

const api = process.env.REACT_APP_API_KEY;
const URL = `https://www.googleapis.com/youtube/v3`;

export default class YoutubeService {
    constructor(key) {
        this.key = key;
    }

    getPopular = async () => {
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

        return items;
    };

    search = async (query) => {
        let {
            data: { items },
        } = await axios({
            method: "get",
            url: `${URL}/search`,
            params: {
                key: api,
                part: "snippet",
                maxResults: "25",
                q: query,
                type: "video",
            },
        });

        items = items.map((video) => {
            return { ...video, id: video.id.videoId };
        });

        return items;
    };
}
