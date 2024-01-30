import React from 'react';
import {FaListUl} from "react-icons/fa";
import {createObjectquery} from "../helper/Helpers.js";
import styles from "./Sidebar.module.css"
import {category} from "../Constants/list.js";

const Category = ({query ,setQuery }) => {


    const startlistitem = (event) => {
        const {tagName} = event.target
        const category = event.target.innerText.toLowerCase()
        if (tagName !== "LI") return;
        setQuery((query) => createObjectquery(query, {category}))
    }

    return (
        <div className={styles.sidebar}>
            <div>
                <FaListUl/>
                <p>Categories</p>
            </div>
            <ul onClick={startlistitem}>
                {category.map(item =>(<li key={item.id} className={item.type.toLowerCase() === query.category ? styles.selected : null}>{item.type}</li>))}
            </ul>
        </div>
    );
};

export default Category;