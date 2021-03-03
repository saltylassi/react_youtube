import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import dotenv from "dotenv";
import "./index.css";
import YoutubeService from "./service/youtubeService";

dotenv.config();

const api = process.env.REACT_APP_API_KEY;

const youtubeService = new YoutubeService(api);

ReactDOM.render(
    <React.StrictMode>
        <App youtubeService={youtubeService} />
    </React.StrictMode>,
    document.getElementById("root")
);
