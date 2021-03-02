import axios from "axios";
import React, { useRef } from "react";
import styles from "./searchHeader.module.css";

const SearchHeader = ({ setVideos }) => {
    const inputRef = useRef();

    const api = process.env.REACT_APP_API_KEY;
    const URL = `https://www.googleapis.com/youtube/v3`;

    const handleSearch = async (event) => {
        event.preventDefault();

        const {
            data: { items: videos },
        } = await axios({
            method: "get",
            url: `${URL}/search`,
            params: {
                key: api,
                part: "snippet",
                maxResults: "25",
                q: inputRef.current.value,
            },
        });

        setVideos(videos);

        inputRef.current.value = "";
    };

    return (
        <div className={styles.container}>
            <a href="localhost:3000" className={styles.link}>
                <div className={styles.logoContainer}>
                    <img
                        className={styles.logo}
                        src="/images/logo.png"
                        alt="logo"
                    />
                    <span className={styles.logoText}>Youtube</span>
                </div>
            </a>
            <form className={styles.searchForm} onSubmit={handleSearch}>
                <input
                    ref={inputRef}
                    className={styles.searchInput}
                    placeholder="search"
                ></input>
                <button className={styles.searchBtn}>
                    <img className={styles.btnImg} src="/images/search.png" />
                </button>
            </form>
        </div>
    );
};

export default SearchHeader;
