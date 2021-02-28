import React, { Component } from "react";
import VideoList from "./components/videoList";
import axios from "axios";

const api = process.env.REACT_APP_API_KEY;
const URL = `https://www.googleapis.com/youtube/v3`;

class App extends Component {
    state = {
        popular: null,
    };

    getPopularData = async () => {
        const {
            data: { items },
        } = await axios({
            method: "get",
            url: `${URL}/videos`,
            params: {
                key: api,
                part: "snippet",
                chart: "mostPopular",
                maxResult: "25",
            },
        });

        this.setState({
            popular: items,
        });
    };

    componentDidMount() {
        this.getPopularData();
    }

    render() {
        const { popular } = this.state;

        return (
            <div>
                <VideoList popular={popular} />
            </div>
        );
    }
}

export default App;
