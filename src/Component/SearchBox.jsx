import React from 'react';
import {IoMdSearch} from "react-icons/io";
import {createObjectquery} from "../helper/Helpers.js";
 import styles from "./Search.module.css"
const SearchBox = ({search, setSearch, setQuery}) => {

    const startbutton = () => {
        setQuery((query) => createObjectquery(query, {search}))

    }


    return (
        <div className={styles.search}>
            <input type="text" placeholder="search....." value={search}
                   onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}/>
            <button onClick={startbutton}>
                <IoMdSearch/>
            </button>
        </div>
    );
};

export default SearchBox;