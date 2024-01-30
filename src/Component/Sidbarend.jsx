import React from 'react';

const Sidbarend = ({state , startdata}) => {
    return (
        <div>
            <div>
                <p>Total:</p>
               <span>{state.total}</span>
            </div>
            <div>
                <p>Qunantity:</p>
                <span>{state.itemsCounter}</span>
            </div>
            <div>
                <p>Status:</p>
                <span>{!state.checkout && "Pendeng..."}</span>
            </div>
            <button onClick={() => startdata("CHECKOUT")}>Checkout</button>
        </div>
    );
};

export default Sidbarend;