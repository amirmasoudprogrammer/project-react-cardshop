import React from 'react';
import {Link} from "react-router-dom";
import {TbListDetails, TbShoppingBagCheck} from "react-icons/tb";
import {quantityitms, text} from "../helper/Helpers.js";
import styles from "../../src/Component/CardStyle.module.css"
import {useCard} from "../Context/CardContext.jsx";
import {MdDeleteOutline} from "react-icons/md";


const Cards = ({data}) => {
    const {id, title, image, price} = data

    const [state, dispatch] = useCard()

    const quantity = quantityitms(state, id)
    const startStates = (type) => {
        dispatch({type, payload: data})
    }

    return (
        <div className={styles.card}>
            <img src={image} alt={title}/>
            <h3>{text(title)}</h3>
            <p>{price} $</p>
            <div className={styles.actions}>
                <Link to={`/products/${id}`}>
                    <TbListDetails/>
                </Link>
                <div>
                    {quantity > 1 && (<button onClick={() => startStates("DECREASE")}>
                        -
                    </button>)}

                    {
                        quantity === 1 && (<button onClick={() => startStates("REMOVE_ITEM")}>
                            <MdDeleteOutline/>
                        </button>)
                    }
                    {
                        !!quantity && <span>{quantity}</span>
                    }
                    {
                        quantity === 0 ?
                            (<button onClick={() => startStates("ADD_ITEM")}>
                                <TbShoppingBagCheck/>
                            </button>)
                            :
                            <button onClick={() => startStates("INCREASE")}>
                                +
                            </button>
                    }



                </div>
            </div>


        </div>
    );
};

export default Cards;