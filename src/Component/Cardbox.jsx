import React from 'react';
import {text} from "../helper/Helpers.js";
import {MdDeleteOutline} from "react-icons/md";
import styles from "./Carditems.module.css"
const Cardbox = ({data, startdata}) => {


    return (
        <div className={styles.card}>
            <img src={data.image} alt={data.title}/>
            <p>{text(data.title)}</p>
            <div className={styles.actions}>
                {data.quantity === 1 && (
                    <button onClick={() => startdata("REMOVE_ITEM", data)}><MdDeleteOutline/></button>)}
                {data.quantity > 1 && (<button onClick={() => startdata("DECREASE", data)}>-</button>)}
                <span>{data.quantity}</span>
                <button onClick={() => startdata("INCREASE", data)}>+</button>
            </div>
        </div>
    );
};

export default Cardbox;