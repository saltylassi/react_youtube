import axios from "axios";
import React, { useRef } from "react";
import styles from "./searchHeader.module.css";

const SearchHeader = ({ search, getPopular, reset }) => {
    const inputRef = useRef();

    const api = process.env.REACT_APP_API_KEY;
    const URL = `https://www.googleapis.com/youtube/v3`;

    const handleSearch = async (event) => {
        event.preventDefault();

        search(inputRef.current.value);

        inputRef.current.value = "";
    };

    const handleReset = () => {
        reset(null);
        getPopular();
    };

    return (
        <div className={styles.container}>
            <a href="localhost:3000" className={styles.link}>
                <div className={styles.logoContainer} onClick={handleReset}>
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
                    type="search"
                ></input>
                <button type="submit" className={styles.searchBtn}>
                    <img className={styles.btnImg} src="/images/search.png" />
                </button>
            </form>
        </div>
    );
};

export default SearchHeader;
