import React from 'react';
import {useCard} from "../Context/CardContext.jsx";
import Cardbox from "../Component/Cardbox.jsx";
import Sidbarend from "../Component/Sidbarend.jsx";

const Checkout = () => {
    const [state , dispatch] = useCard()
    const startdata = (type , payload) =>{
         dispatch({type , payload})
    }
    if (!state.itemsCounter){
        return <div>
            <p>
                سبد خرید خالی است
            </p>
        </div>
    }
    return (
        <div>
            <Sidbarend state={state} startdata={startdata}/>
            {state.selecteditem.map(item => <Cardbox key={item.id} data={item} startdata={startdata}/>)}
        </div>
    );
};

export default Checkout;