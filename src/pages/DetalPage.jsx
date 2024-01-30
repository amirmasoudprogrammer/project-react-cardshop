import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useProductDetails} from "../Context/ProductContext.jsx";
import Loader from "../Component/Loader.jsx";
import {SiOpenproject} from "react-icons/si";
import {IoMdPricetag} from "react-icons/io";
import {FaArrowLeft} from "react-icons/fa";
import styles from "./Datails.module.css"
import {useCard} from "../Context/CardContext.jsx";
import {quantityitms} from "../helper/Helpers.js";
import {MdDeleteOutline} from "react-icons/md";


const DetalPage = () => {
    const {id} = useParams()
    const [state, dispatch] = useCard()

    const produts = useProductDetails(+id)
    if (!produts) return <Loader/>
    const {id: itemid, image, title, description, category, price} = produts

    const quantiy = quantityitms(state, itemid)
    console.log(quantiy)

    const startbuttons = (type) => {
        dispatch({type: type, payload: produts})
    }


    return (
        <div className={styles.container}>
            <img src={image} alt=""/>
            <div className={styles.information}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>
                    <SiOpenproject/>
                    {category}
                </p>
                <div>
                <span className={styles.price}>
                    <IoMdPricetag/>
                    {price} $
                </span>
                    <Link to="/products">
                        <FaArrowLeft/>
                        <span>بازگشت به خانه</span>
                    </Link>
                </div>
                <div className={styles.buttons}>
                    {quantiy === 0 ? (<button className={styles.buttonitem} onClick={() => startbuttons("ADD_ITEM")}> خریدن</button>) :
                        <button className={styles.button} onClick={() => startbuttons("INCREASE")}>+</button>}
                    {!!quantiy && <span>{quantiy}</span>}
                    {quantiy === 1 && ((
                        <button className={styles.button} onClick={() => startbuttons("REMOVE_ITEM")}><MdDeleteOutline/></button>))}
                    {quantiy > 1 && (<button className={styles.button} onClick={() => startbuttons("DECREASE")}>-</button>)}
                </div>
            </div>
        </div>
    );
};

export default DetalPage;